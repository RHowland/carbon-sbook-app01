
/**
 * Create an adapter that converts an object of props with potentially deprecated
 * prop names to the replacement prop names in a newer version. Useful for guarding
 * against breaking changes when a prop has been renamed
 *
 * @param {Array} spec - an array of options which specify a text or regex
 * matcher alongside a replacement if there is a match
 * @returns {Function}
 */
function createPropAdapter(spec) {
    // if props aren't passed in we should default the prop to empty object
    return (input = {}) => {
      const output = {};
      Object.keys(input).forEach((key) => {
        const match = spec.find(([regex]) => {
          return key.match(regex);
        });
        if (match) {
          const [regex, replacer] = match;
          output[key.replace(regex, replacer)] = input[key];
          return;
        }
        output[key] = input[key];
      });
      return output;
    };
  }
  
  /**
   *
   * props staring with "default..." were changed to "initial..." in Downshift v3
   *
   * @see https://github.com/downshift-js/downshift/releases/tag/v3.0.0
   */
  const mapDownshiftProps = createPropAdapter([[/^default/g, 'initial']]);
  
  export function mapPopoverAlignProp(align) {
    switch (align) {
      case 'top-left':
        return 'top-start';
      case 'top-right':
        return 'top-end';
      case 'bottom-left':
        return 'bottom-start';
      case 'bottom-right':
        return 'bottom-end';
      case 'left-bottom':
        return 'left-end';
      case 'left-top':
        return 'left-start';
      case 'right-bottom':
        return 'right-end';
      case 'right-top':
        return 'right-start';
      default:
        return align;
    }
  }
  
  export { mapDownshiftProps };