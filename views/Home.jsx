const React = require('react');
const Wrapper = require('./Wrapper');
import Admin from './pages/Admin';
// const BlogDetails = require('./pages/BlogDetails');

class Home extends React.Component {

    render() {
        return (
            <Wrapper>

                <Admin />

            </Wrapper>
        )
    }
}


module.exports = Home;
