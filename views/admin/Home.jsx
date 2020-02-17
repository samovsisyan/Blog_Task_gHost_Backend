const React = require('react');


import {Root} from 'react-static'
import {Link} from '@reach/router'



class Home extends React.Component {

    render() {

        return (
            <div>
                <div>

                </div>


                <Root>
                    <html>
                    <head>


                        <link href="/admin_images/img/favicon.png" rel="icon" />
                        <link href="/admin_images/img/apple-touch-icon.png" rel="apple-touch-icon" />

                        <link href="/admin_css/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

                        <link href="/admin_css/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
                        <link href="/admin_css/lib/bootstrap-datepicker/css/datepicker.css" rel="stylesheet" type="text/css"/>
                        <link href="/admin_css/lib/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" type="text/css"/>

                        <link href="/admin_css/css/style.css" rel="stylesheet" rel="stylesheet" type="text/css" />
                        <link href="/admin_css/css/style-responsive.css" rel="stylesheet" rel="stylesheet" type="text/css"/>

                    </head>

                    <body>
                    <section id="container">
                        <header className="header black-bg">
                            <div className="sidebar-toggle-box">
                                <div className="fa fa-bars tooltips" data-placement="right"
                                     data-original-title="Toggle Navigation"></div>
                            </div>

                            <Link to="/admin/home" className="logo"><b>DASH<span>IO</span></b></Link>

                            <div className="top-menu">
                                <ul className="nav pull-right top-menu">
                                    <li><Link className="logout" to="admin/login">Logout</Link></li>
                                </ul>
                            </div>
                        </header>

                        <aside>
                            <div id="sidebar" className="nav-collapse ">
                                <ul className="sidebar-menu" id="nav-accordion">
                                    <p className="centered"><Link to="profile.html"><img src="img/ui-sam.jpg"
                                                                                         className="img-circle"
                                    /></Link></p>
                                    <h5 className="centered">Sam Soffes</h5>




                                    <li className="sub-menu">
                                        <Link className="active" to="/admin/blog">
                                            <i className="fa fa-tasks"></i>
                                            <span>Form Blog</span>
                                        </Link>
                                    </li>

                                    <li className="sub-menu">
                                        <Link className="active" to="/admin/user">
                                            <i className="fa fa-tasks"></i>
                                            <span>Form User</span>
                                        </Link>
                                    </li>

                                    <li className="sub-menu">
                                        <Link className="active" to="/admin/comments">
                                            <i className="fa fa-tasks"></i>
                                            <span>Form Comments</span>
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </aside>


                        <footer class="site-footer">
                            <div class="text-center">
                                <p>
                                    &copy; Copyrights <strong>Dashio</strong>. All Rights Reserved
                                </p>
                                <div class="credits">

                                    Created with Dashio template by <Link to="https://templatemag.com/">TemplateMag</Link>
                                </div>
                                <Link to="form_component.html#" class="go-top">
                                    <i class="fa fa-angle-up"></i>
                                </Link>
                            </div>
                        </footer>
                    </section>


                    </body>
                    </html>
                </Root>

            </div>
        )
    }
}

module.exports = Home;





