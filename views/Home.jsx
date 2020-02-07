const React = require('react');
const Wrapper = require('./Wrapper');
const Section = require('./pages/Section');
<<<<<<< HEAD
const BlogDetails = require('./pages/BlogDetails');
=======
>>>>>>> 9c5560692d242eee09fdfdbe0124b29a377bf5ff

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
