// import React, {Component} from 'react';
//
// class Create extends Component {
//
//     render() {
//         return (
//             <div>
//                 <h2>Create Signin</h2>
//                 <form  method="POST">
//
//                     <label>title *</label>
//                     <input type="text" name="title" />
//
//                     <label>description *</label>
//                     <input type="text" name="description" />
//
//                     <label>short_description *</label>
//                     <input type="text" name="short_description" />
//
//                     <label>img *</label>
//                     <input type="text" name="img" />
//
//                     <button>Create Signin</button>
//
//
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default Create;


// import React, {Component} from 'react';
// import {Link} from "react-router-dom";
// import {Root} from 'react-static'
//
//
// class Create extends Component {
//
//     render() {
//         return (
//
//             <div>
//                 <Root>
//                     <html>
//                     <head>
//                         <link rel="icon" type="image/png" href="log_css/images/icons/favicon.ico"/>
//                         <link rel="stylesheet" type="text/css" href="log_css/vendor/bootstrap/css/bootstrap.min.css"/>
//                         <link rel="stylesheet" type="text/css"
//                               href="log_css/fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
//                         <link rel="stylesheet" type="text/css"
//                               href="log_css/fonts/iconic/css/material-design-iconic-font.min.css"/>
//                         <link rel="stylesheet" type="text/css" href="log_css/vendor/animate/animate.css"/>
//                         <link rel="stylesheet" type="text/css" href="log_css/vendor/css-hamburgers/hamburgers.min.css"/>
//                         <link rel="stylesheet" type="text/css" href="log_css/vendor/animsition/css/animsition.min.css"/>
//                         <link rel="stylesheet" type="text/css" href="log_css/vendor/select2/select2.min.css"/>
//                         <link rel="stylesheet" type="text/css" href="log_css/vendor/daterangepicker/daterangepicker.css"/>
//                         <link rel="stylesheet" type="text/css" href="log_css/css/util.css"/>
//                         <link rel="stylesheet" type="text/css" href="log_css/css/main.css"/>
//                     </head>
//                     <body>
//                     <div>
//                         <div className="limiter">
//                             <div className="container-login100">
//                                 <div className="wrap-login100 p-t-85 p-b-20">
//                                     <form method="POST" className="login100-form validate-form">
// 					<span className="login100-form-title p-b-70">
// 						Welcome
// 					</span>
//                                         <span className="login100-form-avatar">
// 						<img src="images/avatar-01.jpg" alt="AVATAR"/>
// 					</span>
//
//                                         <div className="wrap-input100 validate-input m-t-85 m-b-35"
//                                              data-validate="Enter username">
//                                             <input className="input100" type="text" name="username"/>
//                                             <span className="focus-input100" data-placeholder="Username"></span>
//                                         </div>
//
//                                         <div className="wrap-input100 validate-input m-b-50"
//                                              data-validate="Enter password">
//                                             <input className="input100" type="password" name="pass"/>
//                                             <span className="focus-input100" data-placeholder="Password"></span>
//                                         </div>
//
//                                         <div className="container-login100-form-btn">
//                                             <button className="login100-form-btn">
//                                                 Login
//                                             </button>
//                                         </div>
//
//                                         <ul className="login-more p-t-190">
//                                             <li className="m-b-8">
// 							<span className="txt1">
// 								Forgot
// 							</span>
//
//                                                 <Link to="#" className="txt2">
//                                                     Username / Password?
//                                                 </Link>
//                                             </li>
//
//                                             <li>
// 							<span className="txt1">
// 								Don’t have an account?
// 							</span>
//
//                                                 <Link to="#" className="txt2">
//                                                     Sign up
//                                                 </Link>
//                                             </li>
//                                         </ul>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//
//
//                         <div id="dropDownSelect1"></div>
//                     </div>
//                     </body>
//                     </html>
//                 </Root>
//             </div>
//         );
//     }
// }
//
// export default Create;




const React = require('react');
import {Root} from 'react-static'
import {Link} from '@reach/router'
import Header from "../../Header";
import Footer from "../../Footer";


class Login extends React.Component {

    render() {
        const {blog} = this.props;

        return (
            <div>
                <div>
                    <title>{this.props.title}</title>

                    {this.props.children}
                </div>


                <Root>
                    <html>
                    <head>
                        <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>


                        <link rel="stylesheet" type="text/css"
                              href="/login_css/fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>

                        <link rel="stylesheet" type="text/css"
                              href="/login_css/fonts/Linearicons-Free-v1.0.0/icon-font.min.css"/>


                        <link rel="stylesheet" type="text/css"
                              href="/login_css/vendor/css-hamburgers/hamburgers.min.css"/>


                        <link rel="stylesheet" type="text/css" href="/login_css/css/util.css"/>
                        <link rel="stylesheet" type="text/css" href="/login_css/css/main.css"/>
                        <link rel="stylesheet" type="text/css"
                              href="/login_css/vendor/bootstrap/css/bootstrap.min.css"/>
                        <link rel="stylesheet" type="text/css"
                              href="/login_css/vendor/bootstrap/css/bootstrap-grid.main.css"/>
                        <link rel="stylesheet" type="text/css"
                              href="/login_css/vendor/bootstrap/css/bootstrap-reboot.min.css"/>
                        <link rel="stylesheet" type="text/css" href="/login_css/vendor/animate/animate.css"/>
                        <link rel="stylesheet" type="text/css"
                              href="/login_css/vendor/css-hamburgers/hamburgers.min.css"/>
                        <link rel="stylesheet" type="text/css" href="/login_css/vendor/select2/select2.min.css"/>


                    </head>

                    <body>
                    {/*<Header/>*/}
                    <div className="limiter">
                        <div className="container-login100"
                             style={{backgroundImage: 'url(/images/img-01.jpg)'}}>
                            <div className="wrap-login100 p-t-190 p-b-30">
                                <form method="POST" className="login100-form validate-form">
                                    <div className="login100-form-avatar">
                                        <img src="images/avatar-01.jpg" alt="AVATAR"/>
                                    </div>
                                    <span className="login100-form-title p-t-20 p-b-45">
John Doe
</span>
                                    <div className="wrap-input100 validate-input m-b-10"
                                         data-validate="Username is required">
                                        <input className="input100" type="text" required name="username"
                                               placeholder="Username"/>
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
<i className="fa fa-user"></i>
</span>
                                    </div>
                                    <div className="wrap-input100 validate-input m-b-10"
                                         data-validate="Password is required">
                                        <input className="input100" type="password" required name="password"
                                               placeholder="Password"/>
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
<i className="fa fa-lock"></i>
</span>
                                    </div>
                                    <div className="container-login100-form-btn p-t-10">
                                        <button className="login100-form-btn">
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="text-center w-full p-t-25 p-b-230">
                                        <Link to="#" className="txt1">
                                            Forgot Username / Password?
                                        </Link>
                                    </div>
                                    <div className="text-center w-full">
                                        <Link className="txt1" to="/user/signup">
                                            Create new account
                                            <i className="fa fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <div className="text-center w-full">
                                        <Link className="txt1" to="/blog">
                                            Back Blog
                                            <i className="fa fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/*<Footer/>*/}
                    </body>
                    </html>
                </Root>

            </div>
        )
    }
}

module.exports = Login;




