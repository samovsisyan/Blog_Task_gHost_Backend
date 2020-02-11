import React, {Component} from 'react';

class Update extends Component {
    render() {

        const {blog} = this.props;

        return (
            <div>
                <form method="POST">

                    <label>title *</label>
                    <input type="text" name="title" value={blog.title}/>

                    <label>description *</label>
                    <input type="text" name="description" value={blog.description}/>

                    <label>short_description *</label>
                    <input type="text" name="short_description" value={blog.short_description}/>

                    <label>img *</label>
                    <input type="text" name="img" value={blog.img}/>

                    <button>Update</button>

                </form>
            </div>
        );
    }
}

export default Update;
