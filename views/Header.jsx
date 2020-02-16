const React = require('react');

// import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
// import { BrowserRouter, Link } from 'react-router-dom';
import {Root} from 'react-static'
import {Link} from '@reach/router'
// import '../assets/admin_css/style.admin_css'
// import Section from './pages/Section';


class Header extends React.Component {

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


                        {/*<link rel="stylesheet" type="text/css" href="/css/bootstrap.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/bootstrap.css/bootstrap.min.css"/>*/}

                        {/*<link rel="stylesheet" type="text/css" href="/css/style.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/aos.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/owl.carousel.min.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/owl.theme.default.min.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/magnific-popup.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/jquery-ui.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/jquery.mb.YTPlayer.min.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/jquery.fancybox.min.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/bootstrap-datepicker.css"/>*/}
                        {/*<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>*/}

                        <link rel="stylesheet" type="text/css" href="/grid/display_grid.css"/>

                        <title>Hello Worlddddd</title>


                    </head>

                    <body>


                    <div className="project_blog">
                        <div className="header_background">
                        <div className="blog_img_logo">
                            <img src="/images/blog.jpg" alt="Img Blog"/>
                        </div>
                        <div className="blog_manu">

                            <Link to="index.html">Home</Link>

                            <Link to="categories.html">Politics</Link>

                            <Link to="categories.html">Business</Link>

                            <Link to="categories.html">Sport</Link>
                            <Link to="categories.html">Sport</Link>

                            <Link to="contact.html">Contact</Link>


                        </div>
                        </div>
                    </div>
                    </body>
                    </html>
                </Root>

            </div>
        )
    }
}

module.exports = Header;
