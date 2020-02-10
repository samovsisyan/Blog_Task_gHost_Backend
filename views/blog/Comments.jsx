const React = require('react');
const Wrapper = require('../Wrapper');

class Comments extends React.Component {


    render() {
        return (
            <Wrapper>
                <div>
                    <h1>  hello</h1>
                    {/*<h1> {blog.title} </h1>*/}
                    {/*<h2> {blog.description} </h2>*/}

                    {/*    <form action="/comments" method="POST">*/}
                    {/*        <input type="text" name="description"/>*/}
                    {/*        <input type="hidden" name="blog_id" value={blog.id}/>*/}
                    {/*        <input type="hidden" name="user_id" value="1"/>*/}
                    {/*        <button>Comments</button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}


                    {/*{comments.map((comment) => (*/}
                    {/*    <h1>{comment.description}</h1>*/}
                    {/*))}*/}


                </div>
            </Wrapper>
        )
    }
}


module.exports = Comments;