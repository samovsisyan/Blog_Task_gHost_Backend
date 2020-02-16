// const React = require('react');
//
//
// import {Root} from 'react-static'
// import {Link} from '@reach/router'
//
//
//
// class Adminblog extends React.Component {
//
//     render() {
//
//         return (
//             <div>
//                 <div>
//
//                 </div>
//
//
//                 <Root>
//                     <html>
//                     <head>
//
//
//                         <link href="/admin_images/img/favicon.png" rel="icon" />
//                         <link href="/admin_images/img/apple-touch-icon.png" rel="apple-touch-icon" />
//
//                         <link href="/admin_css/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
//
//                         <link href="/admin_css/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
//                         <link href="/admin_css/lib/bootstrap-datepicker/css/datepicker.css" rel="stylesheet" type="text/css"/>
//                         <link href="/admin_css/lib/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" type="text/css"/>
//
//                         <link href="/admin_css/css/style.css" rel="stylesheet" rel="stylesheet" type="text/css" />
//                         <link href="/admin_css/css/style-responsive.css" rel="stylesheet" rel="stylesheet" type="text/css"/>
//
//                     </head>
//
//                     <body>
//                     <section id="container">
//                         <header className="header black-bg">
//                             <div className="sidebar-toggle-box">
//                                 <div className="fa fa-bars tooltips" data-placement="right"
//                                      data-original-title="Toggle Navigation"></div>
//                             </div>
//
//                             <Link to="index.html" className="logo"><b>DASH<span>IO</span></b></Link>
//
//                             <div className="top-menu">
//                                 <ul className="nav pull-right top-menu">
//                                     <li><Link className="logout" to="login.html">Logout</Link></li>
//                                 </ul>
//                             </div>
//                         </header>
//
//                         <aside>
//                             <div id="sidebar" className="nav-collapse ">
//                                 <ul className="sidebar-menu" id="nav-accordion">
//                                     <p className="centered"><Link to="profile.html"><img src="img/ui-sam.jpg"
//                                                                                         className="img-circle"
//                                                                                          /></Link></p>
//                                     <h5 className="centered">Sam Soffes</h5>
//                                     <li className="mt">
//                                         <Link to="index.html">
//                                             <i className="fa fa-dashboard"></i>
//                                             <span>Dashboard</span>
//                                         </Link>
//                                     </li>
//
//                                     <li className="sub-menu">
//                                         <Link to="javascript:;">
//                                             <i className="fa fa-cogs"></i>
//                                             <span>Components</span>
//                                         </Link>
//                                         <ul className="sub">
//                                             <li><Link to="grids.html">Grids</Link></li>
//                                             <li><Link to="calendar.html">Calendar</Link></li>
//                                             <li><Link to="gallery.html">Gallery</Link></li>
//                                             <li><Link to="todo_list.html">Todo List</Link></li>
//                                             <li><Link to="dropzone.html">Dropzone File Upload</Link></li>
//                                             <li><Link to="inline_editor.html">Inline Editor</Link></li>
//                                             <li><Link to="file_upload.html">Multiple File Upload</Link></li>
//                                         </ul>
//                                     </li>
//                                     <li className="sub-menu">
//                                         <Link to="javascript:;">
//                                             <i className="fa fa-book"></i>
//                                             <span>Extra Pages</span>
//                                         </Link>
//                                         <ul className="sub">
//                                             <li><Link to="blank.html">Blank Page</Link></li>
//                                             <li><Link to="login.html">Login</Link></li>
//                                             <li><Link to="lock_screen.html">Lock Screen</Link></li>
//                                             <li><Link to="profile.html">Profile</Link></li>
//                                             <li><Link to="invoice.html">Invoice</Link></li>
//                                             <li><Link to="pricing_table.html">Pricing Table</Link></li>
//                                             <li><Link to="faq.html">FAQ</Link></li>
//                                             <li><Link to="404.html">404 Error</Link></li>
//                                             <li><Link to="500.html">500 Error</Link></li>
//                                         </ul>
//                                     </li>
//                                     <li className="sub-menu">
//                                         <Link className="active" to="#">
//                                             <i className="fa fa-tasks"></i>
//                                             <span>Forms</span>
//                                         </Link>
//                                         <ul className="sub">
//                                             <li className="active"><Link to="form_component.html">Form Components</Link>
//                                             </li>
//                                             <li><Link to="advanced_form_components.html">Advanced Components</Link></li>
//                                             <li><Link to="form_validation.html">Form Validation</Link></li>
//                                             <li><Link to="contactform.html">Contact Form</Link></li>
//                                             <li><Link to="contactform.html">Contact Form</Link></li>
//                                         </ul>
//                                     </li>
//
//                                     {/*<li>*/}
//                                     {/*    <Link to="inbox.html">*/}
//                                     {/*        <i className="fa fa-envelope"></i>*/}
//                                     {/*        <span>Mail </span>*/}
//                                     {/*        <span className="label label-theme pull-right mail-info">2</span>*/}
//                                     {/*    </Link>*/}
//                                     {/*</li>*/}
//
//
//                                     {/*<li>*/}
//                                     {/*    <Link to="google_maps.html">*/}
//                                     {/*        <i className="fa fa-map-marker"></i>*/}
//                                     {/*        <span>Google Maps </span>*/}
//                                     {/*    </Link>*/}
//                                     {/*</li>*/}
//                                 </ul>
//                             </div>
//                         </aside>
//
//                         {/*<section id="main-content">*/}
//                         {/*    <section class="wrapper">*/}
//                         {/*        <h3><i class="fa fa-angle-right"></i> Form Components</h3>*/}
//                         {/*        <div class="row mt">*/}
//                         {/*            <div class="col-lg-12">*/}
//                         {/*                <div class="form-panel">*/}
//                         {/*                    <h4 class="mb"><i class="fa fa-angle-right"></i> Form Elements</h4>*/}
//                         {/*                    <form class="form-horizontal style-form" method="get">*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="col-sm-2 col-sm-2 control-label">Default</label>*/}
//                         {/*                            <div class="col-sm-10">*/}
//                         {/*                                <input type="text" class="form-control" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="col-sm-2 col-sm-2 control-label">Help text</label>*/}
//                         {/*                            <div class="col-sm-10">*/}
//                         {/*                                <input type="text" class="form-control" />*/}
//                         {/*                                    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="col-sm-2 col-sm-2 control-label">Rounder</label>*/}
//                         {/*                            <div class="col-sm-10">*/}
//                         {/*                                <input type="text" class="form-control round-form" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="col-sm-2 col-sm-2 control-label">Input focus</label>*/}
//                         {/*                            <div class="col-sm-10">*/}
//                         {/*                                <input class="form-control" id="focusedInput" type="text" value="This is focused..." />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="col-sm-2 col-sm-2 control-label">Disabled</label>*/}
//                         {/*                            <div class="col-sm-10">*/}
//                         {/*                                <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="col-sm-2 col-sm-2 control-label">Placeholder</label>*/}
//                         {/*                            <div class="col-sm-10">*/}
//                         {/*                                <input type="text" class="form-control" placeholder="placeholder" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="col-sm-2 col-sm-2 control-label">Password</label>*/}
//                         {/*                            <div class="col-sm-10">*/}
//                         {/*                                <input type="password" class="form-control" placeholder="" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="col-lg-2 col-sm-2 control-label">Static control</label>*/}
//                         {/*                            <div class="col-lg-10">*/}
//                         {/*                                <p class="form-control-static">email@example.com</p>*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                    </form>*/}
//                         {/*                </div>*/}
//                         {/*            </div>*/}
//                         {/*        </div>*/}
//
//                         {/*        <div class="row mt">*/}
//                         {/*            <div class="col-lg-12">*/}
//                         {/*                <div class="form-panel">*/}
//                         {/*                    <h4 class="mb"><i class="fa fa-angle-right"></i> Inline Form</h4>*/}
//                         {/*                    <form class="form-inline" role="form">*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="sr-only" for="exampleInputEmail2">Email address</label>*/}
//                         {/*                            <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email" />*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group">*/}
//                         {/*                            <label class="sr-only" for="exampleInputPassword2">Password</label>*/}
//                         {/*                            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" />*/}
//                         {/*                        </div>*/}
//                         {/*                        <button type="submit" class="btn btn-theme">Sign in</button>*/}
//                         {/*                    </form>*/}
//                         {/*                </div>*/}
//                         {/*            </div>*/}
//                         {/*        </div>*/}
//
//                         {/*        <div class="row mt">*/}
//                         {/*            <div class="col-lg-12">*/}
//                         {/*                <div class="form-panel">*/}
//                         {/*                    <h4 class="mb"><i class="fa fa-angle-right"></i> Input Messages</h4>*/}
//                         {/*                    <form class="form-horizontal tasi-form" method="get">*/}
//                         {/*                        <div class="form-group has-success">*/}
//                         {/*                            <label class="col-sm-2 control-label col-lg-2" for="inputSuccess">Input with success</label>*/}
//                         {/*                            <div class="col-lg-10">*/}
//                         {/*                                <input type="text" class="form-control" id="inputSuccess" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group has-warning">*/}
//                         {/*                            <label class="col-sm-2 control-label col-lg-2" for="inputWarning">Input with warning</label>*/}
//                         {/*                            <div class="col-lg-10">*/}
//                         {/*                                <input type="text" class="form-control" id="inputWarning" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="form-group has-error">*/}
//                         {/*                            <label class="col-sm-2 control-label col-lg-2" for="inputError">Input with error</label>*/}
//                         {/*                            <div class="col-lg-10">*/}
//                         {/*                                <input type="text" class="form-control" id="inputError" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                    </form>*/}
//                         {/*                </div>*/}
//                         {/*            </div>*/}
//                         {/*        </div>*/}
//
//                         {/*        <div class="row mt">*/}
//                         {/*            <div class="col-lg-12">*/}
//                         {/*                <div class="form-panel">*/}
//                         {/*                    <h4 class="mb"><i class="fa fa-angle-right"></i> Checkboxes, Radios & Selects</h4>*/}
//                         {/*                    <div class="checkbox">*/}
//                         {/*                        <label>*/}
//                         {/*                            <input type="checkbox" value="" />*/}
//                         {/*                                Option one is this and that&mdash;be sure to include why it's great*/}
//                         {/*                        </label>*/}
//                         {/*                    </div>*/}
//                         {/*                    <div class="radio">*/}
//                         {/*                        <label>*/}
//                         {/*                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />*/}
//                         {/*                                Option one is this and that&mdash;be sure to include why it's great*/}
//                         {/*                        </label>*/}
//                         {/*                    </div>*/}
//                         {/*                    <div class="radio">*/}
//                         {/*                        <label>*/}
//                         {/*                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />*/}
//                         {/*                                Option two can be something else and selecting it will deselect option one*/}
//                         {/*                        </label>*/}
//                         {/*                    </div>*/}
//                         {/*                    <hr />*/}
//                         {/*                        <label class="checkbox-inline">*/}
//                         {/*                            <input type="checkbox" id="inlineCheckbox1" value="option1" /> 1*/}
//                         {/*                        </label>*/}
//                         {/*                        <label class="checkbox-inline">*/}
//                         {/*                            <input type="checkbox" id="inlineCheckbox2" value="option2" /> 2*/}
//                         {/*                        </label>*/}
//                         {/*                        <label class="checkbox-inline">*/}
//                         {/*                            <input type="checkbox" id="inlineCheckbox3" value="option3" /> 3*/}
//                         {/*                        </label>*/}
//                         {/*                        <hr />*/}
//                         {/*                            <select class="form-control">*/}
//                         {/*                                <option>1</option>*/}
//                         {/*                                <option>2</option>*/}
//                         {/*                                <option>3</option>*/}
//                         {/*                                <option>4</option>*/}
//                         {/*                                <option>5</option>*/}
//                         {/*                            </select>*/}
//                         {/*                            <br />*/}
//                         {/*                                <select multiple class="form-control">*/}
//                         {/*                                    <option>1</option>*/}
//                         {/*                                    <option>2</option>*/}
//                         {/*                                    <option>3</option>*/}
//                         {/*                                    <option>4</option>*/}
//                         {/*                                    <option>5</option>*/}
//                         {/*                                </select>*/}
//                         {/*                </div>*/}
//                         {/*            </div>*/}
//
//                         {/*            <div class="col-lg-12">*/}
//                         {/*                <div class="form-panel">*/}
//                         {/*                    <h4 class="mb"><i class="fa fa-angle-right"></i> Custom Toggles</h4>*/}
//                         {/*                    <div class="row mt">*/}
//                         {/*                        <div class="col-sm-6 text-center">*/}
//                         {/*                            <input type="checkbox" checked="" data-toggle="switch" />*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="col-sm-6 text-center">*/}
//                         {/*                            <input type="checkbox" data-toggle="switch" />*/}
//                         {/*                        </div>*/}
//                         {/*                    </div>*/}
//                         {/*                    <div class="row mt">*/}
//                         {/*                        <div class="col-sm-6 text-center">*/}
//                         {/*                            <div class="switch switch-square" data-on-label="<i class=' fa fa-check'></i>" data-off-label="<i class='fa fa-times'></i>">*/}
//                         {/*                                <input type="checkbox" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="col-sm-6 text-center">*/}
//                         {/*                            <div class="switch switch-square" data-on-label="<i class=' fa fa-check'></i>" data-off-label="<i class='fa fa-times'></i>">*/}
//                         {/*                                <input type="checkbox" checked="" />*/}
//                         {/*                            </div>*/}
//                         {/*                        </div>*/}
//                         {/*                    </div>*/}
//                         {/*                    <div class="row mt">*/}
//                         {/*                        <div class="col-sm-6 text-center">*/}
//                         {/*                            <input type="checkbox" disabled data-toggle="switch" />*/}
//                         {/*                        </div>*/}
//                         {/*                        <div class="col-sm-6 text-center">*/}
//                         {/*                            <input type="checkbox" checked disabled data-toggle="switch" />*/}
//                         {/*                        </div>*/}
//                         {/*                    </div>*/}
//                         {/*                </div>*/}
//                         {/*            </div>*/}
//                         {/*        </div>*/}
//                         {/*    </section>*/}
//                         {/*</section>*/}
//
//                         <footer class="site-footer">
//                             <div class="text-center">
//                                 <p>
//                                     &copy; Copyrights <strong>Dashio</strong>. All Rights Reserved
//                                 </p>
//                                 <div class="credits">
//
//                                     Created with Dashio template by <Link to="https://templatemag.com/">TemplateMag</Link>
//                                 </div>
//                                 <Link to="form_component.html#" class="go-top">
//                                     <i class="fa fa-angle-up"></i>
//                                 </Link>
//                             </div>
//                         </footer>
//                     </section>
//
//
//                     </body>
//                     </html>
//                 </Root>
//
//             </div>
//         )
//     }
// }
//
// module.exports = Adminblog;
//
//
//
//
//
