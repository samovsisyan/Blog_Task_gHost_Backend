const React = require('react');
const Wrapper = require('../Wrapper');

class Details extends React.Component {


    render() {
        const {blog, comments } = this.props;
        console.log(blog,5555555555555555555555555555555);
        console.log(comments,7777777777777777777777777777777);
        return (
            <Wrapper>
                <div>
                    <h1> {blog.title} </h1>

                    <h2> {blog.description} </h2>




                    <form action="/comment" method="POST">
                        <input type="text" name="description"/>
                        <input type="hidden" name="blog_id" value={blog.id}/>
                        <input type="hidden" name="user_id" value="1"/>
                        <button>Comments</button>
                    </form>





                </div>
            </Wrapper>
        )
    }
}


module.exports = Details;
