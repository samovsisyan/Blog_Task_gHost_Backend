import React, {Component} from 'react';

class Create extends Component {
    render() {
        const {user} = this.props;
        console.log(user,55555555555555555)
        return (
            <div>
                <h2>Signup</h2>

                {/*{user.map((user) => (*/}
                {/*    <ul>*/}
                {/*        <li>{user.username}</li>*/}
                {/*        <li>{user.password}</li>*/}
                {/*        <li>{user.email}</li>*/}
                {/*        <li>{user.role}</li>*/}
                {/*    </ul>*/}
                {/*))}*/}

                <form action="/signup" method="POST" >
                    <label>username *</label>
                    <input name = "id" type = "text" required placeholder = "User ID" name="username" />

                    <label>password *</label>
                    <input name = "password" type = "password" required placeholder = "Password" name="password" />

                    <button>Signup</button>
                </form>

            </div>
        );
    }
}

export default Create;
