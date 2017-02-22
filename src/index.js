import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './css/index.css'
import { createStore } from 'redux'
import calculator from './reducers/index'
import { Provider } from 'react-redux'

const store = createStore(calculator)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
