import { Component } from 'react'

export default class StateLogger extends Component {
  constructor (props) {
    super(props)

    this._renderRow = this._renderRow.bind(this)
  }

  render () {
    return (
      <div id='state-logger' className='container column'>
        <ul>
          {this.props.list.map(this._renderRow)}
        </ul>
      </div>
    )
  }

  _renderRow (rowData) {
    return (
      <li>rowData</li>
    )
  }
}
