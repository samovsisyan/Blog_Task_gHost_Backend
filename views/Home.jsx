// import {Link} from "@reach/router";
//
// const React = require('react');
// import Header from "./Header";
// import Footer from "./Footer";
//
//
// class Home extends React.Component {
//
//     render() {
//
//
//         return (
//             <div>
//                 <Header/>
//                 <div className="project_blog ">
//                     <div className="">
//                         <Link to="admin/home">Admin</Link>
//                         <Link to="">Blog</Link>
//                     </div>
//                 </div>
//                 <Footer/>
//             </div>
//         )
//     }
// }
//
// module.exports = Home;
//




const React = require('react');

// import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
// import { BrowserRouter, Link } from 'react-router-dom';
import { Root } from 'react-static'
import { Link } from '@reach/router'
// import '../assets/admin_css/style.admin_css'
// import Section from './pages/Section';





class Home extends React.Component {

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

                        <h1>hello</h1>


                    </head>

                    <body>



                    </body>
                    </html>
                </Root>

            </div>
        )
    }
}
module.exports = Home;
