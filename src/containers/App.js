import React, { Component } from 'react'
import Calculator from './Calculator'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/App.css'

class App extends Component {
  render () {
    return (
      <div className='App jc-center'>
        <Header />
        <Calculator />
        <Footer />
      </div>
    )
  }
}

export default App
