import React, { Component } from 'react'
import '../css/App.css'
import Display from '../components/Display'
import Button from '../components/Button'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class Calculator extends Component {
  constructor (props) {
    super(props)

    this._addOperand = this._addOperand.bind(this)
    this._addFunction = this._addFunction.bind(this)
    this._addOperator = this._addOperator.bind(this)
  }

  render () {
    return (
      <div id='Calculator' className='container column'>
        <Display text={this.props.result} history={this.props.history} />
        <div className='container row'>
          <div className='button' style={{ backgroundColor: 'rgb(100, 100, 100)' }} />
          <div className='button' style={{ backgroundColor: 'rgb(100, 100, 100)' }} />
          <div className='button' style={{ backgroundColor: 'rgb(100, 100, 100)' }} />
          <Button value={'CLEAR'} text={'CLR'} style={{ backgroundColor: 'rgb(51, 204, 0)', fontSize: '20px' }} onClick={this._addFunction} />
        </div>
        <div className='container row'>
          <Button value={'7'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'8'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'9'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'/'} style={{ backgroundColor: 'rgb(255, 102, 51)' }} onClick={this._addOperator} />
        </div>
        <div className='container row'>
          <Button value={'4'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'5'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'6'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'x'} style={{ backgroundColor: 'rgb(255, 102, 51)' }} onClick={this._addOperator} />
        </div>
        <div className='container row'>
          <Button value={'1'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'2'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'3'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'-'} style={{ backgroundColor: 'rgb(255, 102, 51)' }} onClick={this._addOperator} />
        </div>
        <div className='container row'>
          <Button value={'.'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'0'} style={{ backgroundColor: 'rgb(100, 100, 100)' }} onClick={this._addOperand} />
          <Button value={'='} style={{ backgroundColor: 'rgb(255, 102, 51)' }} onClick={this._addOperator} />
          <Button value={'+'} style={{ backgroundColor: 'rgb(255, 102, 51)' }} onClick={this._addOperator} />
        </div>
      </div>
    )
  }

  _addOperand (value) {
    this.props.dispatch(actions.addOperand(value))
  }

  _addFunction (value) {
    this.props.dispatch(actions.addFunction(value))
  }

  _addOperator (value) {
    this.props.dispatch(actions.addOperator(value))
  }
}

let mapStateToProps = state => {
  return {
    result: state.operations.value,
    history: state.operations.history
  }
}

export default connect(mapStateToProps)(Calculator)
