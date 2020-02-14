import React, {Component} from 'react';

class Create extends Component {
    render() {
        const {user} = this.props;
        console.log(user,55555555555555555)
        return (
            <div>
                <h2>Protected_page</h2>
                <div>
                    Hey  How are you doing today?
                    Want to log out?
                    <div>
                        Logout
                    </div>
                </div>

            </div>
        );
    }
}

export default Create;
