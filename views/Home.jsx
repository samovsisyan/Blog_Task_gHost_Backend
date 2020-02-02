const React = require('react');
const Wrapper = require('./Wrapper');

class Home extends React.Component {
    render() {
        return (
            <Wrapper title={this.props.title}>
                hello Samvel jan

            </Wrapper>
        )
    }
}


module.exports = Home;
