const React = require('react');
const Wrapper = require('./Wrapper');
// import Admin from './pages/Admin';
import Section from './pages/Section';
// const BlogDetails = require('./pages/BlogDetails');

class Home extends React.Component {

    render() {
        return (
            <Wrapper>

                {/*<Admin />*/}
                <Section />

            </Wrapper>
        )
    }
}


module.exports = Home;
