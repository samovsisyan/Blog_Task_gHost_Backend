const React = require('react');
const Wrapper = require('./Wrapper');
const Section = require('./pages/section');

class Home extends React.Component {

    render() {
        return (
            <Wrapper>
                <Section />
            </Wrapper>
        )
    }
}


module.exports = Home;
