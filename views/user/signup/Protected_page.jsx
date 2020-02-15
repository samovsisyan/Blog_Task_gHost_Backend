import React, {Component} from 'react';

class Create extends Component {
    render() {
        const {username} = this.props;
        console.log(username,55555555555555555)
        return (
            <div>
                <h2>Protected_page</h2>
                <div>
                    Hey ${username}  How are you doing today?
                    Want to log out?
                    <div>
                        <a href="/user/login/logout">Logaout</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Create;
