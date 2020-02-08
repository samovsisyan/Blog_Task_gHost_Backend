import {Link} from "@reach/router";
import {useState} from "react";

const React = require('react');
const Wrapper = require('../Wrapper');

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        }
    }

    handleFile(e) {
        let file = e.target.files[0]
        this.setState({file: file})
    }


    handleUpload(e) {
        console.log(this.state.file, "The STATE ----- $$$$");
    }


    render() {
        const {blog, comments} = this.props;
        // console.log(blog, );
        // console.log(comments.length, );

        console.log(this.state, "The STATE ----- $$$$");


        return (
            <Wrapper>
                <h1>THE FROM</h1>

                <form>
                    <div className="">
                        <label>Select File</label>
                        <input type="file" name="file" onChange={(e) =>
                            this.handleFile(e)}/>
                    </div>

                    <br/>
                    <button type="button" onClick={(e) => this.handleUpload(e)}>Upload</button>
                </form>


                <div>
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


                    <div>

                        <div className="site-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 single-content">
                                        <p className="mb-5">
                                            <img src="/images/big_img_1.jpg" alt="Image" className="img-fluid"/>
                                        </p>
                                        <h1 className="mb-4">
                                            News Needs to Meet Its Audiences Where They Are
                                        </h1>
                                        <div className="post-meta d-flex mb-5">
                                            <div className="bio-pic mr-3">
                                                <img src="/images/person_1.jpg" alt="Image" className="img-fluidid"/>
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
                                                <h2 className="mb-5">{comments.length} Comments</h2>
                                            </div>
                                            <ul className="comment-list">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="/images/person_1.jpg"/>
                                                    </div>
                                                    <div className="comment-body">
                                                        {comments.map((comment) => (
                                                            <div>
                                                                <h3>{comment.name}</h3>
                                                                <div className="meta">January 9, 2018 at 2:21pm</div>

                                                                <p>{comment.description}</p>
                                                            </div>
                                                        ))}

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
                                                        <input type="text" name="name" className="form-control"
                                                               id="name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="message">Message</label>
                                                        <textarea name="" id="message" cols="30" rows="10"
                                                                  name="description"
                                                                  className="form-control"></textarea>
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
