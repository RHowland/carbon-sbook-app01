import React from 'react';

export const PrefixContext = React.createContext('cds');

export function usePrefix() {
  return React.useContext(PrefixContext);
}