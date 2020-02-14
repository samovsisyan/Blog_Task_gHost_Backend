import React, {Component} from 'react';

class Home extends Component {
    render() {
        const {blogs} = this.props

        return (
            <div>
                <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/style/style.css"/>
                </head>
                <body>
                     <h1>Admin / BLog</h1>

                <form action="/profile" method="POST">
                    <input type="file" name="profileImage"/>
                    <button>Upload</button>
                </form>


                <h2>HTML Table</h2>

                <button><a href="/admin/blog/create/">Create</a></button>

                {blogs.map((blog) => (
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>title</th>
                                <th>description</th>
                                <th>short_description</th>
                                <th>created_at</th>
                                <th>img</th>
                                <th>update</th>
                            </tr>
                            <tr>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.description}</td>
                                <td>{blog.short_description}</td>
                                <td>{blog.created_at}</td>
                                <td>{blog.img}</td>
                                <td><a href={`/admin/blog/update/${blog.id}`}>Update</a></td>
                                {/*<td><a href={`/admin/blog/${blog.id}`}>Delete</a></td>*/}
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
