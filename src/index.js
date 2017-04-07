'use strict';
import Preview from './preview'
import React from 'react'
import icon from './icon.png'
import convert from './modules/color'
import match from './modules/match'

const id = 'convertColor';

const plugin = ({term, display, actions}) => {
  if (match(term)) {
    convert.color(term).then((response) => {
      display({
        id,
        icon,
        title: `Your color: ${color == undefined ? '...' : color}`,
        onSelect: () => {
          actions.copyToClipboard(color);
          new Notification('Text Copied', {body: color, icon: icon});
        },
        getPreview: () => <Preview color={color} />
      });
    });
  }
};

module.exports = {
  fn: plugin,
  name: 'Convert code colors',
  keyword: 'convertColor'
}
