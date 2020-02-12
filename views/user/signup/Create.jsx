import React, {Component} from 'react';

class Create extends Component {
    render() {
        const {user} = this.props;
        console.log(user,55555555555555555)
        return (
            <div>
                <h2>Create Signup</h2>

                {user.map((user) => (
                    <ul>
                        <li>{user.username}</li>
                        <li>{user.password}</li>
                        <li>{user.email}</li>
                        <li>{user.role}</li>
                    </ul>
                ))}

                <form  method="POST">

                    <label>username *</label>
                    <input type="text" name="username" />

                    <label>password *</label>
                    <input type="text" name="password" />

                    <label>email *</label>
                    <input type="text" name="email" />

                    <label>role *</label>
                    <input type="text" name="role" />

                    <button>Create Signup</button>


                </form>
            </div>
        );
    }
}

export default Create;
