import React, { Component } from 'react'
import '../css/App.css'

export default class Display extends Component {
  render() {
    return (
      <div className='container column' style={{ backgroundColor: 'rgb(65, 65, 65)', borderRadius: '3px', paddingRight: '10px' }}>
        <div className='history'>
          {
            this.props.history.map((item) => {
              return item + ' ';
            })
          }
        </div>
        <div className='display'>{this.props.text}</div>
      </div>
    )
  }
}
