const React = require('react');

// import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
// import { BrowserRouter, Link } from 'react-router-dom';
import { Root } from 'react-static'
import { Link } from '@reach/router'
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





    <div className="site-wrap">

        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle">Span</span>
                </div>
            </div>
            <div className="site-mobile-menu-body">Span</div>
        </div>


        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 d-flex">
                        <Link to="index.html" className="site-logo">
                            Meranda
                        </Link>

                        <Link to="#" className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black">
                            <span className="icon-menu h3">Span</span>

                        </Link>

                    </div>
                    <div className="col-12 col-lg-6 ml-auto d-flex">
                        <div className="ml-md-auto top-social d-none d-lg-inline-block">
                            <Link to="#" className="d-inline-block p-3"><span
                                className="icon-facebook"><img src="/images/iconfinder_facebook_834722.png" alt="Facebbok"/></span></Link>
                            <Link to="#" className="d-inline-block p-3"><span
                                className="icon-twitter"><img src="/images/iconfinder_Instagram_1298747.png" alt="Instagram"/></span></Link>
                            <Link to="#" className="d-inline-block p-3"><span
                                className="icon-instagram"></span></Link>
                        </div>
                        <form action="#" className="search-form d-inline-block">

                            <div className="d-flex">
                                <input type="email" className="form-control" placeholder="Search" />
                                <button type="submit" className="btn btn-secondary"><span
                                    className="icon-search">Span</span></button>
                            </div>
                        </form>


                    </div>
                    <div className="col-6 d-block d-lg-none text-right">

                    </div>
                </div>
            </div>


            <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
                 role="banner">

                <div className="container">
                    <div className="d-flex align-items-center">

                        <div className="mr-auto">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                                    <li className="active">
                                        <Link to="index.html" className="nav-link text-left">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="categories.html"
                                              className="nav-link text-left">Categories</Link>
                                    </li>
                                    <li>
                                        <Link to="categories.html" className="nav-link text-left">Politics</Link>
                                    </li>
                                    <li>
                                        <Link to="categories.html" className="nav-link text-left">Business</Link>
                                    </li>
                                    <li>
                                        <Link to="categories.html" className="nav-link text-left">Health</Link>
                                    </li>
                                    <li><Link to="categories.html" className="nav-link text-left">Design</Link>
                                    </li>
                                    <li>
                                        <Link to="categories.html" className="nav-link text-left">Sport</Link>
                                    </li>
                                    <li><Link to="contact.html" className="nav-link text-left">Contact</Link>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                    </div>
                </div>

            </div>

        </div>


        </div>







    {/*<div className="site-section subscribe bg-light">*/}
    {/*    <div className="container">*/}
    {/*        <form action="#" className="row align-items-center">*/}
    {/*            <div className="col-md-5 mr-auto">*/}
    {/*                <h2>Newsletter Subcribe</h2>*/}
    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis*/}
    {/*                    pariatur obcaecati possimus nisi ea iste!</p>*/}
    {/*            </div>*/}
    {/*            <div className="col-md-6 ml-auto">*/}
    {/*                <div className="d-flex">*/}
    {/*                    <input type="email" className="form-control" placeholder="Enter your email" />*/}
    {/*                        <button type="submit" className="btn btn-secondary"><span*/}
    {/*                            className="icon-paper-plane">Span</span></button>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </form>*/}
    {/*    </div>*/}
    {/*</div>*/}




</body>
    </html>
</Root>

       </div>
  )
 }
}
module.exports = Header;
