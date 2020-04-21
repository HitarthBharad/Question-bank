import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';


export default class Navbar extends Component {

  render() {
   return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
       <Router>
        <a href='/home' className='navbar-brand'>Question-Bank</a>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <a href='/home' className='nav-link'> Home</a>
          </li>
          <li className="navbar-item">
          <a href='/add' className='nav-link'> Add Question</a>
          </li>
          <li className='navbar-item'>
              <a href='/addSubject' className='nav-link'> Add Subject </a>
            </li>
            <li className='navbar-item'>
              <a href='/addTopic' className='nav-link'> Add Topic </a>
            </li>
           
        <li>
            <a href='/' className='nav-link' onClick={this.handleClick} style={{paddingLeft:450, color: 'red',msHighContrastAdjust: '15'}}> LOGOUT</a>
          </li>
        </ul>
        </div>
       </Router>
      </nav>
    );
  }
}


