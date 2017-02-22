import React, { Component } from 'react';
import GitHub from '../images/GitHub';
import LinkedIn from '../images/LinkedIn';
import StackOverflow from '../images/StackOverflow'
import REACT from '../images/react-logo.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="container row footer">
        <div className="container row full-width jc-center">
          <p className="text" style={{ fontSize: "small" }}>
            Copyright &copy; 2017 Facundo La Rocca. All right reserved.
            Made with <i><a href={'https://facebook.github.io/react/'} className="text" style={{ fontSize: "small", color: "rgb(200, 200, 200)" }}>ReactJS.</a></i>
            <a href={'https://facebook.github.io/react/'}><img src={REACT} className="logo" alt="ReactJs" style={{ verticalAlign: "middle", height: "20px" }} /></a>
          </p>
          <a target="_blank" className="container column jc-center" href={'http://stackoverflow.com/users/4585153/facundo-la-rocca?tab=profile'}><StackOverflow className="icon-med" innerColor="rgb(200, 200, 200)" outerColor="transparent" /></a>
          <a target="_blank" className="container column jc-center" href={'https://www.linkedin.com/in/facundo-la-rocca-5803673b/'}><LinkedIn className="icon-large" innerColor="rgb(200, 200, 200)" outerColor="transparent" /></a>
          <a target="_blank" className="container column jc-center" href={'https://github.com/flarocca'}><GitHub className="icon" innerColor="rgb(200, 200, 200)" /></a>
        </div>
      </div>
    );
  }
}