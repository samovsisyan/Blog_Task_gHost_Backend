// const React = require('react');

import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
import { Link } from 'react-router-dom';
// import '../public/stylesheets/style.css';

class Wrapper extends Component {
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf8" />
                <title>{this.props.title}</title>


            </head>
            <body>
            {this.props.children}

            <h1>Wrapper</h1>




            </body>
            </html>
  )
 }
}
module.exports = Wrapper;