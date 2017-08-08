import React, { Component, PropTypes } from 'react'
import { KeyboardNav, KeyboardNavItem } from 'cerebro-ui'
import styles from './style.css'

export default ({ color, actions }) => (
  <div className={styles.wrapper}>
    <KeyboardNav>
      {Object.keys(color).map(code => (
        <KeyboardNavItem
          key={code}
          onSelect={() => {actions.copyToClipboard(color[code]); actions.hideWindow()} }
        >
          <div style={{backgroundColor: color[code]}} className={styles.colorBox} />
            { color[code] }
        </KeyboardNavItem>
      ))}
    </KeyboardNav>
  </div>
)