const React = require('react');

// import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
// import { BrowserRouter, Link } from 'react-router-dom';
import { Root } from 'react-static'
import { Link } from '@reach/router'
// import '../assets/admin_css/style.admin_css'
// import Section from './pages/Section';





class Footer extends React.Component {

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


                        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
                        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css/bootstrap.min.css" />

                        <link rel="stylesheet" type="text/css" href="/css/style.css" />
                        <link rel="stylesheet" type="text/css" href="/css/aos.css" />
                        <link rel="stylesheet" type="text/css" href="/css/owl.carousel.min.css" />
                        <link rel="stylesheet" type="text/css" href="/css/owl.theme.default.min.css" />
                        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.css" />
                        <link rel="stylesheet" type="text/css" href="/css/jquery-ui.css" />
                        <link rel="stylesheet" type="text/css" href="/css/jquery.mb.YTPlayer.min.css" />
                        <link rel="stylesheet" type="text/css" href="/css/jquery.fancybox.min.css" />
                        <link rel="stylesheet" type="text/css" href="/css/bootstrap-datepicker.css" />
                        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
                        <title>Hello Worlddddd</title>


                    </head>

                    <body>

                    <div className="project_blog">
<div className="footer_background">
                    <div className="site-section subscribe bg-light">
                        <div className="container">
                            <form action="#" className="row align-items-center">
                                <div className="col-md-5 mr-auto">
                                    <h2>Newsletter Subcribe</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis
                                        pariatur obcaecati possimus nisi ea iste!</p>
                                </div>
                                <div className="col-md-6 ml-auto">
                                    <div className="d-flex">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                        <button type="submit" className="btn btn-secondary"><span
                                            className="icon-paper-plane">Span</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
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
module.exports = Footer;
