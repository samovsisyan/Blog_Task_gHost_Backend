const React = require('react');

// import React, { Component } from 'react';
// const {Link} = require("react-router-dom").Link;
// import { BrowserRouter, Link } from 'react-router-dom';
import { Root } from 'react-static'
import { Link } from '@reach/router'
// import '../assets/css/style.css'


class Wrapper extends React.Component {
    render() {
        return (
            // <html>
            // <head>
            //     <meta charSet="utf8"/>
            //
            //
            // </head>
            // <body>
            <div>
                <title>{this.props.title}</title>

                {this.props.children}
            </div>

//             <h1>hgfthjkliouyt</h1>
//
// <Root>
//
//     <div className="site-wrap">
//
//         <div className="site-mobile-menu site-navbar-target">
//             <div className="site-mobile-menu-header">
//                 <div className="site-mobile-menu-close mt-3">
//                     <span className="icon-close2 js-menu-toggle">Span</span>
//                 </div>
//             </div>
//             <div className="site-mobile-menu-body">Span</div>
//         </div>
//
//
//         <div className="header-top">
//             <div className="container">
//                 <div className="row align-items-center">
//                     <div className="col-12 col-lg-6 d-flex">
//                         <Link to="index.html" className="site-logo">
//                             Meranda
//                         </Link>
//
//                         <Link to="#" className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black">
//                             <span className="icon-menu h3">Span</span>
//
//                         </Link>
//
//                     </div>
//                     <div className="col-12 col-lg-6 ml-auto d-flex">
//                         <div className="ml-md-auto top-social d-none d-lg-inline-block">
//                             <Link to="#" className="d-inline-block p-3"><span
//                                 className="icon-facebook">Span</span></Link>
//                             <Link to="#" className="d-inline-block p-3"><span
//                                 className="icon-twitter">Span</span></Link>
//                             <Link to="#" className="d-inline-block p-3"><span
//                                 className="icon-instagram">Span</span></Link>
//                         </div>
//                         <form action="#" className="search-form d-inline-block">
//
//                             <div className="d-flex">
//                                 <input type="email" className="form-control" placeholder="Search..." />
//                                 <button type="submit" className="btn btn-secondary"><span
//                                     className="icon-search">Span</span></button>
//                             </div>
//                         </form>
//
//
//                     </div>
//                     <div className="col-6 d-block d-lg-none text-right">
//
//                     </div>
//                 </div>
//             </div>
//
//
//             <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
//                  role="banner">
//
//                 <div className="container">
//                     <div className="d-flex align-items-center">
//
//                         <div className="mr-auto">
//                             <nav className="site-navigation position-relative text-right" role="navigation">
//                                 <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
//                                     <li className="active">
//                                         <Link to="index.html" className="nav-link text-left">Home</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="categories.html"
//                                               className="nav-link text-left">Categories</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="categories.html" className="nav-link text-left">Politics</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="categories.html" className="nav-link text-left">Business</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="categories.html" className="nav-link text-left">Health</Link>
//                                     </li>
//                                     <li><Link to="categories.html" className="nav-link text-left">Design</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="categories.html" className="nav-link text-left">Sport</Link>
//                                     </li>
//                                     <li><Link to="contact.html" className="nav-link text-left">Contact</Link>
//                                     </li>
//                                 </ul>
//                             </nav>
//
//                         </div>
//
//                     </div>
//                 </div>
//
//             </div>
//
//         </div>
//
//         <div className="site-section py-0">
//             <div className="owl-carousel hero-slide owl-style">
//
//                 <div className="site-section">
//                     <div className="container">
//                         <div className="half-post-entry d-block d-lg-flex bg-light">
//                             <div className="img-bg">style="background-image: url('images/big_img_1.jpg')"</div>
//                             <div className="contents">
//                                 <span className="caption">Editor's Pick</span>
//                                 <h2><Link to="blog-single.html">News Needs to Meet Its Audiences Where They
//                                     Are</Link></h2>
//                                 <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                     Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel
//                                     sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt
//                                     aliquid quaerat culpa nemo veritatis, iste adipisci excepturi
//                                     consectetur doloribus aliquam accusantium beatae?</p>
//
//                                 <div className="post-meta">
//                                     <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link to="#">Food</Link></span>
//                                     <span className="date-read">Jun 14 <span className="mx-1">;</span> 3 min read <span
//                                         className="icon-star2">Span</span></span>
//                                 </div>
//
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="site-section">
//                     <div className="container">
//                         <div className="half-post-entry d-block d-lg-flex bg-light">
//                             <div className="img-bg" >style="background-image: url('images/big_img_1.jpg')"</div>
//                             <div className="contents">
//                                 <span className="caption">Editor's Pick</span>
//                                 <h2><Link to="blog-single.html">News Needs to Meet Its Audiences Where They
//                                     Are</Link></h2>
//                                 <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                     Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel
//                                     sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt
//                                     aliquid quaerat culpa nemo veritatis, iste adipisci excepturi
//                                     consectetur doloribus aliquam accusantium beatae?</p>
//
//                                 <div className="post-meta">
//                                     <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link to="#">Food</Link></span>
//                                     <span className="date-read">Jun 14 <span className="mx-1">Span</span> 3 min read <span
//                                         className="icon-star2">Span</span></span>
//                                 </div>
//
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//
//             </div>
//         </div>
//
//
//         <div className="site-section">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-8">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="section-title">
//                                     <h2>Editor's Pick</h2>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <div className="post-entry-1">
//                                     <Link to="post-single.html"><img src="images/img_h_1.jpg" alt="Image"
//                                                                      className="img-fluid"/></Link>
//                                     <h2><Link to="blog-single.html">News Needs to Meet Its Audiences
//                                         Where They Are</Link></h2>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                         Eligendi temporibus praesentium neque, voluptatum quam
//                                         quibusdam.</p>
//                                     <div className="post-meta">
//                                                         <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link
//                                                             to="#">News</Link></span>
//                                         <span className="date-read">Jun 14 <span className="mx-1">Span</span> 3 min read <span
//                                             className="icon-star2">Span</span></span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <div className="post-entry-2 d-flex bg-light">
//                                     <div className="thumbnail" >style="background-image: url('images/img_v_1.jpg')"</div>
//                                     <div className="contents">
//                                         <h2><Link to="blog-single.html">News Needs to Meet Its Audiences
//                                             Where They Are</Link></h2>
//                                         <div className="post-meta">
//                                                         <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link
//                                                             to="#">News</Link></span>
//                                             <span className="date-read">Jun 14 <span className="mx-1">Span</span> 3 min read <span
//                                                 className="icon-star2">Span</span></span>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <div className="post-entry-2 d-flex">
//                                     <div className="thumbnail">style="background-image: url('images/img_v_2.jpg')"</div>
//                                     <div className="contents">
//                                         <h2><Link to="blog-single.html">News Needs to Meet Its Audiences
//                                             Where They Are</Link></h2>
//                                         <div className="post-meta">
//                                                         <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link
//                                                             to="#">News</Link></span>
//                                             <span className="date-read">Jun 14 <span className="mx-1">Span</span> 3 min read <span
//                                                 className="icon-star2">Span</span></span>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <div className="post-entry-2 d-flex">
//                                     <div className="thumbnail">style="background-image: url('images/img_v_3.jpg')"</div>
//                                     <div className="contents">
//                                         <h2><Link to="blog-single.html">News Needs to Meet Its Audiences
//                                             Where They Are</Link></h2>
//                                         <div className="post-meta">
//                                                         <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link
//                                                             to="#">News</Link></span>
//                                             <span className="date-read">Jun 14 <span className="mx-1">Span</span> 3 min read <span
//                                                 className="icon-star2">Span</span></span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4">
//                         <div className="section-title">
//                             <h2>Trending</h2>
//                         </div>
//
//                         <div className="trend-entry d-flex">
//                             <div className="number align-self-start">01</div>
//                             <div className="trend-contents">
//                                 <h2><Link to="blog-single.html">News Needs to Meet Its Audiences Where They
//                                     Are</Link></h2>
//                                 <div className="post-meta">
//                                     <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link to="#">News</Link></span>
//                                     <span className="date-read">Jun 14 <span
//                                         className="mx-1">Span</span> 3 min read <span
//                                         className="icon-star2">Span</span></span>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="trend-entry d-flex">
//                             <div className="number align-self-start">02</div>
//                             <div className="trend-contents">
//                                 <h2><Link to="blog-single.html">News Needs to Meet Its Audiences Where They
//                                     Are</Link></h2>
//                                 <div className="post-meta">
//                                     <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link to="#">News</Link></span>
//                                     <span className="date-read">Jun 14 <span
//                                         className="mx-1">Span</span> 3 min read <span
//                                         className="icon-star2">Span</span></span>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="trend-entry d-flex">
//                             <div className="number align-self-start">03</div>
//                             <div className="trend-contents">
//                                 <h2><Link to="blog-single.html">News Needs to Meet Its Audiences Where They
//                                     Are</Link></h2>
//                                 <div className="post-meta">
//                                     <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link to="#">News</Link></span>
//                                     <span className="date-read">Jun 14 <span
//                                         className="mx-1">Span</span> 3 min read <span
//                                         className="icon-star2">Span</span></span>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="trend-entry d-flex">
//                             <div className="number align-self-start">04</div>
//                             <div className="trend-contents">
//                                 <h2><Link to="blog-single.html">News Needs to Meet Its Audiences Where They
//                                     Are</Link></h2>
//                                 <div className="post-meta">
//                                     <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link to="#">News</Link></span>
//                                     <span className="date-read">Jun 14 <span
//                                         className="mx-1">Span</span> 3 min read <span
//                                         className="icon-star2">Span</span></span>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <p>
//                             <Link to="#" className="more">See All Trends <span
//                                 className="icon-keyboard_arrow_right">Span</span></Link>
//                         </p>
//
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </Root>
//
//             </body>
//             </html>
  )
 }
}
module.exports = Wrapper;