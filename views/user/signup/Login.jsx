import React, {Component} from 'react';

class Create extends Component {
    render() {

        return (
            <div>
             {/*<h1>LOgin </h1>*/}
                <form  method="POST">

                    <label>username *</label>
                    <input name = "username" type = "text" required placeholder = "Username"/>

                    <label>password *</label>
                    <input name = "password" type = "password" required placeholder = "Password"/>

                    <button>Log in</button>
                </form>


            </div>
        );
    }
}

export default Create;
