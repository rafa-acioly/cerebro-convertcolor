'use strict';
/**
 * Code modules
 */
import React from 'react'

/**
 * Modules developed by myself
 */
import Preview from './preview'
import color from './modules/color'
import match from './modules/match'

/**
 * Variables used on cerebro
 */
const id = 'convertColor';
import icon from './icon.png'

const plugin = ({term, display, actions}) => {
  if (match.find(term)) {
    let codeColor = match.find(term)
    let codeType = match.getType(term)

    color.convert(codeColor[0].replace('#', ''), codeType).then((response) => {
      for (var key in response) {
        if (response.hasOwnProperty(key)) {
          display({
            id,
            icon,
            title: `${key.toUpperCase()}`,
            onSelect: () => {
              actions.copyToClipboard(response[key]);
              new Notification('Text Copied', {body: response[key], icon: icon});
            },
            getPreview: () => <Preview color={response[key]} />
          });
        }
      }
    });
  }
};

module.exports = {
  fn: plugin,
  name: 'Convert code colors',
  keyword: 'convertColor'
}
