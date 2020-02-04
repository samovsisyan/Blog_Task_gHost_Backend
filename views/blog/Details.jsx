const React = require('react');
const Wrapper = require('../Wrapper');

class Details extends React.Component {


    render() {
        const {data} = this.props;

        return (
            <Wrapper>
                <div>
                    <h1> {data.title} </h1>

                    <h2> {data.description} </h2>



                </div>
            </Wrapper>
        )
    }
}


module.exports = Details;
