import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <h2>Signup</h2>
                <form  method="POST">

                    <label>Name *</label>
                    <input type="text" name="name" />

                    <label>M_Name *</label>
                    <input type="text" name="m_name" />

                    <label>E_Mail *</label>
                    <input type="text" name="e_mail" />

                    <label>Phone *</label>
                    <input type="text" name="phone" />

                    <label>Password *</label>
                    <input type="text" name="password" />

                    <button>Signup</button>

                </form>
            </div>
        );
    }
}

export default Signup;
