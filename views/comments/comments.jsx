const React = require('react');
const Wrapper = require('../Wrapper');

class Comments extends React.Component {


    render() {
        const {comment} = this.props;

        return (
            <Wrapper>
                <div>
                    {
                        comment.map((comment) => (
                                <div>
                                    <h2><a href={`comments/Comments/${comment.id}`}>{comment.comments} </a></h2>

                                </div>
                            )
                        )
                    }



                </div>
            </Wrapper>
        )
    }
}


module.exports = Comments;