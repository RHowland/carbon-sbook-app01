
import React from 'react';
import { Text, TextProps } from './Text';

/**
 * Create a text component wrapper for a given text node type. Useful for
 * returning a `Text` component for a text node like a `<label>`.
 * @param {string} element
 * @param {string} displayName
 */
export function createTextComponent(
  element: React.ElementType,
  displayName: string
) {
  function TextWrapper(props: TextProps<React.ElementType>) {
    return <Text as={element} {...props} />;
  }

  if (true) {
    TextWrapper.displayName = displayName;
  }

  return TextWrapper;
}