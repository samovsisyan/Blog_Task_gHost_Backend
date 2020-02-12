import React, {Component} from 'react';

class Signin extends Component {
    render() {
        return (
            <div>
                <h2>Signin</h2>
                <form  method="POST">

                    <label>title *</label>
                    <input type="text" name="title" />

                    <label>description *</label>
                    <input type="text" name="description" />

                    <button>Signin</button>

                </form>
            </div>
        );
    }
}

export default Signin;
