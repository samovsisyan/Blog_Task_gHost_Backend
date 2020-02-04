const React = require('react');
const Wrapper = require('../Wrapper');

class Details extends React.Component {


    render() {
        const {data} = this.props;
        console.log()
        return (
            <Wrapper>
                <div>
                    <h1> {data.title} </h1>

                    <h2> {data.description} </h2>


                    <form action="/comment" method="POST">
                        <input type="text" name="username"/>
                        <input type="hidden" name="blog_id" value={data.id}/>
                        <button>Comments</button>
                    </form>

                </div>
            </Wrapper>
        )
    }
}


module.exports = Details;
