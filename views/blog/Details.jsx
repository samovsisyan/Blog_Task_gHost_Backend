const React = require('react');
const Wrapper = require('../Wrapper');

class Details extends React.Component {


    render() {
        const {comments, blog} = this.props;
        return (
            <Wrapper>
                <div>
                    <h1> {blog.title} </h1>

                    <h2> {blog.description} </h2>


                    <form action="/comments" method="POST">
                        <input type="text" name="description"/>
                        <input type="hidden" name="blog_id" value={blog.id}/>
                        <input type="hidden" name="user_id" value="1"/>
                        <button>Comments</button>
                    </form>


                    { comments.map((comment) => (
                           <div>
                               <p>{comment.description}</p>
                           </div>
                            )
                        )
                    }

                </div>
            </Wrapper>
        )
    }
}


module.exports = Details;
