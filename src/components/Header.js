import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <div className='container column header'>
        <h1>Redux Calculator</h1>
        <p className='header-text'>
          This is an example of a simple Calculator using ReactJS and Redux.
          The whole code is public <a className='repo-link' href={'https://github.com/flarocca/redux-calculator'}>here</a>.
        </p>
      </div>
    )
  }
}
