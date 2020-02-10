const React = require('react');

// import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
// import { BrowserRouter, Link } from 'react-router-dom';
import { Root } from 'react-static'
import { Link } from '@reach/router'
// import '../assets/css/style.css'
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

                    <body className="fix-header card-no-border">

                    <div className="preloader">
                        {/*<svg className="circular" viewBox="25 25 50 50">*/}
                        {/*    <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"*/}
                        {/*            stroke-miterlimit="10"/>*/}
                        {/*</svg>*/}
                    </div>

                    
                    <div id="main-wrapper">

                        <header className="topbar">
                            <nav className="navbar top-navbar navbar-toggleable-sm navbar-light">

                                <div className="navbar-header">
                                    <Link className="navbar-brand" to="index.html">

                                        <b>

                                            <img src="../assets/images/logo-icon.png" alt="homepage"
                                                 className="dark-logo"/>

                                        </b>

                                        <span>
                                            <img src="../assets/images/logo-text.png" alt="homepage"
                                                 className="dark-logo"/>
                        </span>
                                    </Link>
                                </div>


                                <div className="navbar-collapse">

                                    <ul className="navbar-nav mr-auto mt-md-0 ">
                                        <li className="nav-item"><Link
                                            className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                                            to="javascript:void(0)"><i className="ti-menu">Span</i></Link></li>
                                        <li className="nav-item hidden-sm-down">
                                            <form className="app-search p-l-20">
                                                <input type="text" className="form-control" placeholder="Search for..." />
                                                    <Link to="/" className="srh-btn"><i className="ti-search"></i></Link>
                                            </form>
                                        </li>
                                    </ul>

                                    <ul className="navbar-nav my-lg-0">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                                               to="" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user"
                                                                          className="profile-pic m-r-5"/>Markarn Doe</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>

                        <aside className="left-sidebar">
                            <div className="scroll-sidebar">
                                <nav className="sidebar-nav">
                                    <ul id="sidebarnav">
                                        <li>
                                            <Link to="index.html" className="waves-effect"><i
                                                className="fa fa-clock-o m-r-10" aria-hidden="true">Span</i>Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="pages-profile.html" className="waves-effect"><i
                                                className="fa fa-user m-r-10" aria-hidden="true">Span</i>Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="table-basic.html" className="waves-effect"><i
                                                className="fa fa-table m-r-10" aria-hidden="true">Span</i>Basic Table</Link>
                                        </li>
                                        <li>
                                            <Link to="icon-fontawesome.html" className="waves-effect"><i
                                                className="fa fa-font m-r-10" aria-hidden="true">Span</i>Icons</Link>
                                        </li>
                                        <li>
                                            <Link to="map-google.html" className="waves-effect"><i
                                                className="fa fa-globe m-r-10" aria-hidden="true">Span</i>Google Map</Link>
                                        </li>
                                        <li>
                                            <Link to="pages-blank.html" className="waves-effect"><i
                                                className="fa fa-columns m-r-10" aria-hidden="true">Span</i>Blank Page</Link>
                                        </li>
                                        <li>
                                            <Link to="pages-error-404.html" className="waves-effect"><i
                                                className="fa fa-info-circle m-r-10" aria-hidden="true">Span</i>Error
                                                404</Link>
                                        </li>
                                    </ul>
                                    <div className="text-center m-t-30">
                                        <Link to="https://wrappixel.com/templates/monsteradmin/"
                                           className="btn btn-danger"> Upgrade to Pro</Link>
                                    </div>
                                </nav>
                            </div>
                        </aside>

                        <div className="page-wrapper">

                            <div className="container-fluid">
                                <div className="row page-titles">
                                    <div className="col-md-6 col-8 align-self-center">
                                        <h3 className="text-themecolor m-b-0 m-t-0">Profile</h3>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="javascript:void(0)">Home</Link></li>
                                            <li className="breadcrumb-item active">Profile</li>
                                        </ol>
                                    </div>
                                    <div className="col-md-6 col-4 align-self-center">
                                        <Link to="https://wrappixel.com/templates/monsteradmin/"
                                           className="btn pull-right hidden-sm-down btn-success"> Upgrade to Pro</Link>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4 col-xlg-3 col-md-5">
                                        <div className="card">
                                            <div className="card-block">
                                                <div class="m-t-30"><img src="../assets/images/users/5.jpg"
                                                                            className="img-circle" width="150"/>
                                                    <h4 className="card-title m-t-10">Hanna Gover</h4>
                                                    <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                                                    <div className="row text-center justify-content-md-center">
                                                        <div className="col-4"><Link to="javascript:void(0)"
                                                                                  className="link"><i
                                                            className="icon-people">i</i> <div
                                                            class="font-medium">254</div></Link></div>
                                                        <div className="col-4"><Link to="javascript:void(0)"
                                                                                  className="link"><i
                                                            className="icon-picture">i</i> <div
                                                            class="font-medium">54</div></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-lg-8 col-xlg-9 col-md-7">
                                        <div className="card">
                                            <div className="card-block">
                                                <form className="form-horizontal form-material">
                                                    <div className="form-group">
                                                        <label className="col-md-12">Full Name</label>
                                                        <div className="col-md-12">
                                                            <input type="text" placeholder="Johnathan Doe"
                                                                   className="form-control form-control-line" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="example-email"
                                                               className="col-md-12">Email</label>
                                                        <div className="col-md-12">
                                                            <input type="email" placeholder="johnathan@admin.com"
                                                                   className="form-control form-control-line"
                                                                   name="example-email" id="example-email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-md-12">Password</label>
                                                        <div className="col-md-12">
                                                            <input type="password" value="password"
                                                                   className="form-control form-control-line" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-md-12">Phone No</label>
                                                        <div className="col-md-12">
                                                            <input type="text" placeholder="123 456 7890"
                                                                   className="form-control form-control-line" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-md-12">Message</label>
                                                        <div className="col-md-12">
                                                            <textarea rows="5"
                                                                      className="form-control form-control-line">textarea</textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-12">Select Country</label>
                                                        <div className="col-sm-12">
                                                            <select className="form-control form-control-line">
                                                                <option>London</option>
                                                                <option>India</option>
                                                                <option>Usa</option>
                                                                <option>Canada</option>
                                                                <option>Thailand</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-sm-12">
                                                            <button className="btn btn-success">Update Profile</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <footer className="footer text-center">
                                © 2017 Monster Admin by wrappixel.com
                            </footer>

                        </div>

                    </div>

                    </body>
                    </html>
                </Root>

            </div>
        )
    }
}
module.exports = Admin;