const React = require('react');
const Wrapper = require('./Header');

class Error extends React.Component {
    render() {
        return (
            <Wrapper>
                {this.props.err.message}
            </Wrapper>
        )
    }
}


module.exports = Error
