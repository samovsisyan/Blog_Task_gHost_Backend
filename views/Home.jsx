const React = require('react');
const Wrapper = require('./Wrapper');

class Home extends React.Component {

    render() {
        return (
            <Wrapper>
                <form action="/" method="POST">
                    <input type="text" name="username" />
                    <input type="text" name="address" />
                    <button>Comments</button>
                </form>
            </Wrapper>
        )
    }
}


module.exports = Home;
