import {Link} from "@reach/router";

const React = require('react');
const Wrapper = require('../Wrapper');

class Details extends React.Component {


    render() {
        const {blog, comments} = this.props;
        console.log(blog, 11111111111111111111111111111111111111111111111111112222222222222222222233333333333333333333);
        console.log(comments,);
        return (
            <Wrapper>


                <div>
                    <h1> {blog.title} </h1>
                    <h2> {blog.description} </h2>

                    {/*    <form action="/comments" method="POST">*/}
                    {/*        <input type="text" name="description"/>*/}
                    {/*        <input type="hidden" name="blog_id" value={blog.id}/>*/}
                    {/*        <input type="hidden" name="user_id" value="1"/>*/}
                    {/*        <button>Comments</button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}


                    {comments.map((comment) => (
                        <h1>{comment.description}</h1>
                    ))}


                    <div>

                        <div className="site-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 single-content">
                                        <p className="mb-5">
                                            <img src="images/big_img_1.jpg" alt="Image" className="img-fluid"/>
                                        </p>
                                        <h1 className="mb-4">
                                            News Needs to Meet Its Audiences Where They Are
                                        </h1>
                                        <div className="post-meta d-flex mb-5">
                                            <div className="bio-pic mr-3">
                                                <img src="images/person_1.jpg" alt="Image" className="img-fluidid"/>
                                            </div>
                                            <div className="vcard">
                                            <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link
                                                to="#">News</Link></span>
                                                <span className="date-read">Jun 14 <span
                                                    className="mx-1">•</span> 3 min read <span
                                                    className="icon-star2"></span></span>
                                            </div>
                                        </div>
                                        <p>{blog.description}</p>


                                        <div className="pt-5">
                                            <p>Categories: <Link to="#">Design</Link>, <Link
                                                to="#">Events</Link> Tags: <Link
                                                to="#">#html</Link>, <Link to="#">#trends</Link></p>
                                        </div>


                                        <div className="pt-5">
                                            <div className="section-title">
                                                <h2 className="mb-5">6 Comments</h2>
                                            </div>
                                            <ul className="comment-list">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="images/person_1.jpg" alt="Image placeholder"/>
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>Jean Doe</h3>
                                                        <div className="meta">January 9, 2018 at 2:21pm</div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Pariatur
                                                            quidem laborum necessitatibus, ipsam impedit vitae autem,
                                                            eum
                                                            officia, fugiat saepe enim sapiente iste iure! Quam voluptas
                                                            earum
                                                            impedit necessitatibus, nihil?</p>
                                                        <p><Link to="#" className="reply">Reply</Link></p>
                                                    </div>

                                                </li>


                                            </ul>

                                            <div className="comment-form-wrap pt-5">
                                                <div className="section-title">
                                                    <h2 className="mb-5">Leave a comment</h2>
                                                </div>

                                                <form action="/comments" method="POST" className="p-5 bg-light">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name *</label>
                                                        <input type="text" name="name" className="form-control" id="name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="message">Message</label>
                                                        <textarea name="" id="message" cols="30" rows="10"
                                                                  name="description" className="form-control"></textarea>
                                                        <input type="hidden" name="blog_id" value={blog.id}/>
                                                        <input type="hidden" name="user_id" value="1"/>
                                                        <button onclick="redirect()" value="Redirect">Comments</button>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}


module.exports = Details;
