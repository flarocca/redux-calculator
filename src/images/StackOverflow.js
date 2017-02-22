import React, { Component } from 'react'

export default class StackOverflow extends Component {
  render () {
    return (
      <svg className={this.props.className} viewBox='0 0 2048 2048' >
        <g>
          <circle height='2048' cx='1024' cy='1024' r='1024' stroke='none' fill={this.props.outerColor} fillOpacity='1' fillRule='nonzero' width='2048' x='0' y='0' />
          <path d='M567.932 1724.61l790.426 0 0 -560.175 95.9977 0 0 656.173 -982.422 0 0 -656.173 95.9977 0 0 560.175zm75.1276 -240.162l640.173 0 0 95.9977 -640.173 0 0 -95.9977zm23.7614 -244.374l636.558 67.9418 -10.1433 95.3883 -636.558 -67.9418 10.1433 -95.3883zm44.739 -248.124l616.819 171.34 -25.5496 92.4331 -616.819 -171.34 25.5496 -92.4331zm145.8 -296.282l556.141 317.064 -47.3363 83.4072 -556.141 -317.064 47.3363 -83.4072zm292.582 -285.486l378.388 516.374 -77.367 56.7071 -378.388 -516.374 77.367 -56.7071zm380.625 -150.962l137.147 625.31 -93.8056 20.2583 -137.147 -625.31 93.8056 -20.2583z' fill={this.props.innerColor} />
        </g>
      </svg>
    )
  }
}
