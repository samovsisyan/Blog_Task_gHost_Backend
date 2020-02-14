import React, {Component} from 'react';

class Home extends Component {
    render() {
        const {user} = this.props

        return (
            <div>
                <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style/style.css"/>
                </head>
                <body>
                    <h1>Admin / User</h1>

                {/*<form action="/user/signup/signup" method="POST">*/}
                {/*    <input type="text"/>*/}
                {/*</form>*/}


                <h2>HTML Table</h2>

                <button><a href="/admin/user/create">Create</a></button>

                {user.map((user) => (
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>username</th>
                                <th>password</th>
                                <th>email</th>
                                <th>role</th>
                                <th>img</th>

                            </tr>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.img}</td>
                                <td><a href={`/admin/user/update/${user.id}`}>Update</a></td>
                            </tr>

                        </table>

                    )
                )
                }
                </body>
                </html>


            </div>
        );
    }
}

export default Home;
