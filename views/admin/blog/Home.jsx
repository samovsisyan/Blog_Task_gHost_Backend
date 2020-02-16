import React from 'react';
import BlogHome from '../Home';
import {Link} from '@reach/router'


class Home extends React.Component {
    render() {
        const {blogs} = this.props
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
                    <section class="wrapper">

                        <div class="row mt">
                            <div class="col-md-12">
                                <div class="content-panel">
                                    <table class="table table-striped table-advance table-hover">
                                        <h4><i class="fa fa-angle-right"></i> Advanced Table</h4>
                                        <hr/>
                                        <thead>
                                        <tr>
                                            <th>
                                                <i>
                                                    ID
                                                </i>
                                            </th>

                                            <th>
                                                <i>
                                                    Title
                                                </i>
                                            </th>


                                            <th>
                                                <i>
                                                    Description
                                                </i>
                                            </th>

                                            <th>
                                                <i>
                                                    Short Description
                                                </i>
                                            </th>


                                                <th>
                                                    <i>
                                                        Images
                                                    </i>
                                                </th>

                                            <th>
                                                <i>
                                                    Created At
                                                </i>
                                            </th>

                                            <th>
                                                <i>
                                                    Halpers
                                                </i>
                                            </th>


                                        </tr>
                                        </thead>
                                        <Link to="/admin/blog/create">
                                            <button className="btn btn-success btn-xs"><i className="fa fa-check">Create
                                                Blog</i>
                                            </button>
                                        </Link>
                                        {blogs.map((blog) => (
                                        <tbody>
                                        <tr>
                                            <td>
                                                {blog.id}
                                            </td>
                                            <td>{blog.title}</td>
                                            <td>{blog.description}</td>
                                            <td>{blog.short_description}</td>
                                            <td>
                                                {blog.img}
                                            </td>

                                            <td>
                                                {blog.created_at}
                                            </td>
                                            <td>
                                                {/*<button class="btn btn-success btn-xs"><i class="fa fa-check"></i>*/}
                                                {/*</button>*/}


                                                <Link to={`/admin/blog/update/${blog.id}`}>
                                                    <button class="btn btn-primary btn-xs">
                                                         <i class="fa fa-pencil"></i>
                                                    </button>
                                                </Link>

                                                    <Link to={`/admin/blog/delete/${blog.id}`}>
                                                <button class="btn btn-danger btn-xs">
                                                    <i class="fa fa-trash-o "></i>
                                                </button>
                                                    </Link>

                                            </td>
                                        </tr>

                                        </tbody>
                                        ))}
                                    </table>
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

                        <Link to="basic_table.html#" class="go-top">
                            <i className="fa fa-angle-up"></i>
                        </Link>
                    </div>
                </footer>

                {/*     <h1>Admin / BLog</h1>*/}

                {/*<form action="/profile" method="POST">*/}
                {/*    <input type="file" name="profileImage"/>*/}
                {/*    <button>Upload</button>*/}
                {/*</form>*/}


                {/*<h2>HTML Table</h2>*/}

                {/*<button><Link to="/admin/blog/create/">Create</Link></button>*/}

                {/*{blogs.map((blog) => (*/}
                {/*        <table>*/}
                {/*            <tr>*/}
                {/*                <th>ID</th>*/}
                {/*                <th>title</th>*/}
                {/*                <th>description</th>*/}
                {/*                <th>short_description</th>*/}
                {/*                <th>created_at</th>*/}
                {/*                <th>img</th>*/}
                {/*                <th>update</th>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>{blog.id}</td>*/}
                {/*                <td>{blog.title}</td>*/}
                {/*                <td>{blog.description}</td>*/}
                {/*                <td>{blog.short_description}</td>*/}
                {/*                <td>{blog.created_at}</td>*/}
                {/*                <td>{blog.img}</td>*/}
                {/*                <td><Link to={`/admin/blog/update/${blog.id}`}>Update</Link></td>*/}
                {/*                /!*<td><Link to={`/admin/blog/${blog.id}`}>Delete</Link></td>*!/*/}
                {/*            </tr>*/}

                {/*        </table>*/}

                {/*    )*/}
                {/*)*/}
                {/*}*/}


                </body>
                </html>


            </div>
    );
    }
    }

    export default Home;
