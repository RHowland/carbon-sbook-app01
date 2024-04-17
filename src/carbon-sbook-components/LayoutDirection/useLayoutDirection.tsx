import { useContext } from 'react';
import { LayoutDirectionContext } from './LayoutDirectionContext';

/**
 * Get access to the current layout direction in context
 */
export function useLayoutDirection() {
  return useContext(LayoutDirectionContext);
}