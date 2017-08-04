import React, { Component, PropTypes } from 'react'
import style from './style.css'

export default ({ color, actions }) => (
  <div>
    {Object.keys(color).map(code => (
      <div className={style.box} style={{margin: '1em 0', borderColor: color[code]}}>
        <h1 style={{color: color[code]}} className={style.title}>
          { color[code] }
        </h1>
        <button style={{
            color: color[code], 
            borderColor: color[code],
            margin: '.5em 0'
          }} 
          className="button is-small" 
          onClick={() => {actions.copyToClipboard(color[code]); actions.hideWindow()} }>Copy</button>
      </div>
    ))}
  </div>
)