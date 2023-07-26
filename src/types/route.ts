import React from 'react';

/**
 * @method type TRoute
 */
export type TRoute = {
  label: string;
  path: string;
  component: any; // revision ()=>JSX.ELEMENT
  typeRoute?: string;
};
