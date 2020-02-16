const React = require('react');

// import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
// import { BrowserRouter, Link } from 'react-router-dom';
import {Root} from 'react-static'
import {Link} from '@reach/router'
// import '../assets/admin_css/style.admin_css'
// import Section from './pages/Section';


class Admin extends React.Component {

    render() {


        return (
            <div>
                <div>
                    <title>{this.props.title}</title>

                    {this.props.children}
                </div>


                <Root>
                    <html>
                    <head>

                        <title>Admin Page</title>


                    </head>

                    <body>

                    </body>
                    </html>
                </Root>

            </div>
        )
    }
}

module.exports = Admin;
