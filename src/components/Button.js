import React, { Component } from 'react'
import '../css/App.css'

export default class Button extends Component {
  constructor (props) {
    super(props)

    this._onClick = this._onClick.bind(this)
  }

  render () {
    return (
      <div className='container row'>
        <button className='button' style={this.props.style} onClick={this._onClick}>
          {this.props.text || this.props.value}
        </button>
      </div>
    )
  }

  _onClick () {
    if ((this.props.onClick) && (typeof this.props.onClick === 'function')) {
      this.props.onClick(this.props.value)
    }
  }
}
