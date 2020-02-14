import React, {Component} from 'react';

class Create extends Component {
    render() {
        const {user} = this.props;

        return (
            <div>
                <h1>User Create</h1>
                <form  method="POST">

                    <label>username *</label>
                    <input type="text" name="username" />

                    <label>password *</label>
                    <input type="text" name="password" />

                    <label>email *</label>
                    <input type="text" name="email" />

                    <select name="role">
                        <option>admin</option>
                        <option>user</option>
                    </select>

                    <label>img *</label>
                    <input type="text" name="img" />

                    <button>Create</button>

                </form>
            </div>
        );
    }
}

export default Create;
