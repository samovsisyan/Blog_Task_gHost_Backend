// import React, {Component} from 'react';
//
// class Home extends Component {
//     render() {
//         const {user} = this.props
//
//         return (
//             <div>
//                 <html>
//                 <head>
//                     <link rel="stylesheet" type="text/css" href="/style/style.css"/>
//                 </head>
//                 <body>
//                     <h1>Admin / User</h1>
//
//                 {/*<form action="/user/signup/signup" method="POST">*/}
//                 {/*    <input type="text"/>*/}
//                 {/*</form>*/}
//
//
//                 <h2>HTML Table</h2>
//
//                 <button><a href="/admin/user/create">Create</a></button>
//
//                 {user.map((user) => (
//                         <table>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>username</th>
//                                 <th>password</th>
//                                 <th>email</th>
//                                 <th>role</th>
//                                 <th>img</th>
//
//                             </tr>
//                             <tr>
//                                 <td>{user.id}</td>
//                                 <td>{user.username}</td>
//                                 <td>{user.password}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.role}</td>
//                                 <td>{user.img}</td>
//                                 <td><a href={`/admin/user/update/${user.id}`}>Update</a></td>
//                             </tr>
//
//                         </table>
//
//                     )
//                 )
//                 }
//                 </body>
//                 </html>
//
//
//             </div>
//         );
//     }
// }
//
// export default Home;




import React from 'react';
import UserHome from '../Home';
import {Link} from '@reach/router'


class Home extends React.Component {
    render() {
        const {user} = this.props
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
                <UserHome/>

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
                                                    User Name
                                                </i>
                                            </th>


                                            <th>
                                                <i>
                                                    Password
                                                </i>
                                            </th>

                                            <th>
                                                <i>
                                                    Email
                                                </i>
                                            </th>


                                            <th>
                                                <i>
                                                    Role
                                                </i>
                                            </th>

                                            <th>
                                                <i>
                                                    Img
                                                </i>
                                            </th>

                                            <th>
                                                <i>
                                                    Halpers
                                                </i>
                                            </th>


                                        </tr>
                                        </thead>
                                        <Link to="/admin/user/create">
                                            <button className="btn btn-success btn-xs"><i className="fa fa-check">Create
                                                User</i>
                                            </button>
                                        </Link>
                                        {user.map((user) => (
                                            <tbody>
                                            <tr>
                                                <td>
                                                    {user.id}
                                                </td>
                                                <td>{user.username}</td>
                                                <td>{user.password}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    {user.role}
                                                </td>

                                                <td>
                                                    {user.img}
                                                </td>
                                                <td>



                                                    <Link to={`/admin/user/update/${user.id}`}>
                                                        <button class="btn btn-primary btn-xs">
                                                            <i class="fa fa-pencil">Update</i>
                                                        </button>
                                                    </Link>

                                                    <Link to={`/admin/user/delete/${user.id}`}>
                                                        <button class="btn btn-danger btn-xs">
                                                            <i class="fa fa-trash-o ">Delete</i>
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


                </body>
                </html>


            </div>
        );
    }
}

export default Home;
