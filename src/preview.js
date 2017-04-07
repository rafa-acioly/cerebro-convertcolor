import React, { Component, PropTypes } from 'react'
import style from './style.css'

export default class Preview extends Component {
  render() {
    let inline = {
      backgroundColor: this.props.color
    };
    return (
      <div className={style.box} style={inline}>
        <h1 className={style.title}>
          {this.props.color}
        </h1>
        <h2 className={style.subtitle}>your color preview</h2>
      </div>
    )
  }
}

Preview.PropTypes = {
  color: PropTypes.string.isRequired
}