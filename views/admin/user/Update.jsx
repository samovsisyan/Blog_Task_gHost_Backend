// import React, {Component} from 'react';
//
// class Update extends Component {
//     render() {
//
//         const {user} = this.props;
//
//         return (
//             <div>
//                 <form method="POST">
//
//                     <label>username *</label>
//                     <input type="text" name="username" value={user.username}/>
//
//                     <label>password *</label>
//                     <input type="text" name="password" value={user.password}/>
//
//                     <label>email *</label>
//                     <input type="text" name="email" value={user.email}/>
//
//                     <label>role *</label>
//                     <input type="text" name="role" value={user.role}/>
//                     {/*<select name="role">*/}
//                     {/*    <option value={user.role}>admin</option>*/}
//                     {/*    <option value={user.role}>user</option>*/}
//                     {/*</select>*/}
//
//                     <label>img *</label>
//                     <input type="text" name="img" value={user.img}/>
//
//                     <button>Update</button>
//
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default Update;
import React, {Component} from 'react';
import UserHome from "../Home";
import {Link} from "@reach/router";

class Update extends Component {
    render() {

        const {user} = this.props;

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
                    <section className="wrapper">

                        <div className="row mt">
                            <div className="col-md-12">
                                <div className="content-panel">
                                    <h4><i className="fa fa-angle-right"></i> Update Table</h4>
                                    <hr/>

                                    <form method="POST">
                                        <label>username *</label>
                                        <input type="text" name="username" value={user.username}/>

                                        <label>password *</label>
                                        <input type="text" name="password" value={user.password}/>

                                        <label>email *</label>
                                        <input type="text" name="email" value={user.email}/>

                                        {/*<label>role *</label>*/}
                                        {/*<input type="text" name="role" value={user.role}/>*/}

                                        <select name="role">
                                            <option value={user.role}>admin</option>
                                            <option value={user.role}>user</option>
                                        </select>

                                        <label>img *</label>
                                        <input type="text" name="img" value={user.img}/>

                                        <button className="btn btn-success btn-xs">
                                            <i className="fa fa-check">Update</i>
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

export default Update;
