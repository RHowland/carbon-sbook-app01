import PropTypes, { ReactNodeLike } from 'prop-types';
import React, { ForwardedRef } from 'react';
import { ButtonSize } from '../Button';
import classNames from 'classnames';
import { Tooltip } from '../Tooltip';
import { usePrefix } from '../../internal/usePrefix';
import ButtonBase from '../Button/ButtonBase';

export const IconButtonKinds = [
  'primary',
  'secondary',
  'ghost',
  'tertiary',
] as const;

export type IconButtonKind = (typeof IconButtonKinds)[number];

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  align?:
    | 'top'
    | 'top-left'
    | 'top-start'
    | 'top-right'
    | 'top-end'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-start'
    | 'bottom-right'
    | 'bottom-end'
    | 'left'
    | 'right';

  children?: React.ReactNode;
  className?: string;
  closeOnActivation?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  enterDelayMs?: number;
  isSelected?: boolean;
  kind?: IconButtonKind;
  label: ReactNodeLike;
  leaveDelayMs?: number;
  size?: ButtonSize;
  wrapperClasses?: string;
}



const IconButton = React.forwardRef(function IconButton(
    {
      align,
      children,
      className,
      closeOnActivation = true,
      defaultOpen = false,
      disabled,
      enterDelayMs = 100,
      kind,
      label,
      leaveDelayMs = 100,
      wrapperClasses,
      size,
      isSelected,
      ...rest
    }: IconButtonProps,
    ref: ForwardedRef<unknown> // TODO: this is unknown on Button, so should it be here as well?
  ) {
    const prefix = usePrefix();
  
    const tooltipClasses = classNames(wrapperClasses, `${prefix}--icon-tooltip`, {
      [`${prefix}--icon-tooltip--disabled`]: disabled,
    });
  
    return (
      <Tooltip
        align={align}
        closeOnActivation={closeOnActivation}
        className={tooltipClasses}
        defaultOpen={defaultOpen}
        enterDelayMs={enterDelayMs}
        label={label}
        leaveDelayMs={leaveDelayMs}>
        <ButtonBase
          {...rest}
          disabled={disabled}
          kind={kind}
          ref={ref}
          size={size}
          className={classNames(
            `${prefix}--btn--icon-only`,
            {
              [`${prefix}--btn--selected`]: isSelected,
            },
            className
          )}>
          {children}
        </ButtonBase>
      </Tooltip>
    );
  });