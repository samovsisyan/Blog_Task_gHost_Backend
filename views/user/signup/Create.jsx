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

                <form method="POST" >
                    <label>username *</label>
                    <input name = "username" type = "text" required placeholder = "username" name="username" />

                    <label>password *</label>
                    <input name = "password" type = "password" required placeholder = "Password" name="password" />

                    <label>email *</label>
                    <input name = "email" type = "text" required placeholder = "Email" name="email" />



                    <button>Signup</button>
                </form>

            </div>
        );
    }
}

export default Create;
