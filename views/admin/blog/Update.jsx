import React, {Component} from 'react';
import BlogHome from "../Home";
import {Link} from "@reach/router";

class Update extends Component {
    render() {

        const {blog} = this.props;

        return (
            <div>
                <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style/style.css"/>

                    <link href="/admin_images/img/favicon.png" rel="icon"/>
                    <link href="/admin_images/img/apple-touch-icon.png" rel="apple-touch-icon"/>

                    <link href="/admin_css/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

                    <link href="/admin_css/lib/font-awesome/css/font-awesome.css" rel="stylesheet"/>
                    <link href="/admin_css/lib/bootstrap-datepicker/css/datepicker.css" rel="stylesheet"
                          type="text/css"/>
                    <link href="/admin_css/lib/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet"
                          type="text/css"/>

                    <link href="/admin_css/css/style.css" rel="stylesheet" rel="stylesheet" type="text/css"/>
                    <link href="/admin_css/css/style-responsive.css" rel="stylesheet" rel="stylesheet" type="text/css"/>

                </head>
                <body>
                <BlogHome/>

                <section id="main-content">
                    <section className="wrapper">

                        <div className="row mt">
                            <div className="col-md-12">
                                <div className="content-panel">
                                        <h4><i className="fa fa-angle-right"></i> Update Table</h4>
                                        <hr/>

                                            <form method="POST">
                                                <div>
                                                <label>Title</label>
                                                    <input type="text" name="title" value={blog.title}/>
                                                </div>

                                                <div>
                                                <label>Description</label>
                                                    <input type="text" name="description" value={blog.description}/>
                                                </div>

                                                <div>
                                                <label>Short Description</label>
                                                    <input type="text" name="short_description" value={blog.short_description}/>
                                                </div>

                                                <div>
                                                <label>Img</label>
                                                    <input type="text" name="img" value={blog.img}/>
                                                </div>
                                                <button className="btn btn-success btn-xs"><i
                                                    className="fa fa-check">Update</i>
                                                </button>
                                            </form>


                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <footer className="site-footer">
                    <div className="text-center">
                        <p>
                            &copy; Copyrights <strong>Dashio</strong>. All Rights Reserved
                        </p>
                        <div className="credits">

                            Created with Dashio template by <Link to="https://templatemag.com/">TemplateMag</Link>
                        </div>
                        <Link to="basic_table.html#" class="go-top">
                            <i className="fa fa-angle-up"></i>
                        </Link>
                    </div>
                </footer>
                </body>
                </html>


            </div>
            // <div>
            //     <form method="POST">
            //
            //         <label>title *</label>
            //         <input type="text" name="title" value={blog.title}/>
            //
            //         <label>description *</label>
            //         <input type="text" name="description" value={blog.description}/>
            //
            //         <label>short_description *</label>
            //         <input type="text" name="short_description" value={blog.short_description}/>
            //
            //         <label>img *</label>
            //         <input type="text" name="img" value={blog.img}/>
            //
            //         <button>Update</button>
            //
            //     </form>
            // </div>
        );
    }
}

export default Update;
