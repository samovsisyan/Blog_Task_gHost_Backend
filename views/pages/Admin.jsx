import React, {Component} from 'react';
import Wrapper from "../Wrapper";


class Admin extends Component {


    render() {

        const {blog} = this.props;
        console.log(admin, 4444444444444444444444444444444444444);
        return (
            <div>
                <form action="/blog" method="POST">

                    <label>title *</label>
                    <input type="text" name="title"/>

                    <label>description *</label>
                    <input type="text" name="description"/>

                    <label>short_description *</label>
                    <input type="text" name="short_description"/>

                    <label>slug *</label>
                    <input type="text" name="slug"/>

                    <button>Comments</button>

                </form>


                {/*<form action="/admin" method="POST" className="p-5 bg-light">*/}
                {/*    <div className="form-group">*/}
                {/*        <input type="text" name="user_Name" />*/}
                {/*        <input type="text" name="passport"/>*/}
                {/*        <input type="text" name="email"/>*/}
                {/*        <input type="text" name="description"/>*/}
                {/*        <input type="text" name="short_description"/>*/}
                {/*        <input type="text" name="title"/>*/}
                {/*        <input type="submit" name="title" onChange={this.handleChange}/>*/}
                {/*    </div>*/}
                {/*</form>*/}

            </div>
        );
    }
}

export default Admin;