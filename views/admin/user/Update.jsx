import React, {Component} from 'react';

class Update extends Component {
    render() {

        const {user} = this.props;

        return (
            <div>
                <form method="POST">

                    <label>username *</label>
                    <input type="text" name="username" value={user.username}/>

                    <label>password *</label>
                    <input type="text" name="password" value={user.password}/>

                    <label>email *</label>
                    <input type="text" name="email" value={user.email}/>

                    {/*<label>role *</label>*/}
                    {/*<input type="text" name="role" value={user.role}/>*/}
                    <select name="role">
                        <option value={user.role}>admin</option>
                        <option value={user.role}>user</option>
                    </select>

                    <label>img *</label>
                    <input type="text" name="img" value={user.img}/>

                    <button>Update</button>

                </form>
            </div>
        );
    }
}

export default Update;
