'use strict';
/**
 * Core modules
 */
import React from 'react'
import Color from 'color'

/**
 * Modules developed by myself
 */
import Preview from './preview'

/**
 * Variables used on cerebro
 */
const id = 'convertColor';
import icon from './icon.png'

export const name = 'Convert code colors'

export const fn = ({term, display, actions}) => {
  try {
    let color = Color(term);
    const colors = {
      hex: color.hex().toString(),
      rgb: color.rgb().string(),
      hsl: color.hsl().round().string(),
    }

    display({
      icon,
      title: `Conversion for code ${term}`,
      getPreview: () => (
        <Preview color={ colors } actions={ actions } />
      )
    });
  } catch (e) {
    // provided string is not color
  }
};