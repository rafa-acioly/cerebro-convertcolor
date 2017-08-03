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
import match from './modules/match'

/**
 * Variables used on cerebro
 */
const id = 'convertColor';
import icon from './icon.png'

const plugin = ({term, display, actions}) => {
  if (match.find(term)) {
    let color = Color(term);
    const colors = {
      hex: color.hex().toString(),
      rgb: color.rgb().string(),
      hsl: color.hsl().string(),
    }

    display({
      icon,
      title: `Conversion for code ${term}`,
      onSelect: () => {
        actions.copyToClipboard(term)
        new Notification('Text copied', {body: term, icon: icon})
      },
      getPreview: () => {
        for (var key in colors) {
          if (colors.hasOwnProperty(key)) {
            <Preview color={ colors[key] } />
          }
        }
      }
    });
  }
};

module.exports = {
  fn: plugin,
  name: 'Convert code colors',
}
