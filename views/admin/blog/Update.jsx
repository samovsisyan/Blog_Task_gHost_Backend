import React, {Component} from 'react';

class Update extends Component {
    render() {
        return (
            <div>
                <form action="admin/blog/update" method="POST">

                    <label>id *</label>
                    <input type="text" name="id"/>

                    <label>title *</label>
                    <input type="text" name="title"/>

                    <label>description *</label>
                    <input type="text" name="description"/>

                    <label>short_description *</label>
                    <input type="text" name="short_description"/>

                    <label>img *</label>
                    <input type="text" name="img"/>





                    <button>Update</button>

                </form>
            </div>
        );
    }
}

export default Update;
