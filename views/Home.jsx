const React = require('react');
const Wrapper = require('./Wrapper');
const Section = require('./pages/Section');
const BlogDetails = require('./pages/BlogDetails');

class Home extends React.Component {

    render() {
        return (
            <Wrapper>
                <BlogDetails />
            </Wrapper>
        )
    }
}


module.exports = Home;
