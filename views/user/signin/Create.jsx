import React, {Component} from 'react';

class Create extends Component {

    render() {
        return (
            <div>
                <h2>Create Signin</h2>
                <form  method="POST">

                    <label>title *</label>
                    <input type="text" name="title" />

                    <label>description *</label>
                    <input type="text" name="description" />

                    <label>short_description *</label>
                    <input type="text" name="short_description" />

                    <label>img *</label>
                    <input type="text" name="img" />

                    <button>Create Signin</button>


                </form>
            </div>
        );
    }
}

export default Create;
