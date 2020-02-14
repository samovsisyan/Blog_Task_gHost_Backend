const React = require('react');


import {Root} from 'react-static'
import {Link} from '@reach/router'
import Header from "../Header";
import Footer from "../Footer";


class Section extends React.Component {

    render() {
        const {blog, } = this.props;

        return (
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" data-aos-easing="slide"
                 data-aos-duration="800" data-aos-delay="0">
                <Header/>

                <div class="site-wrap">
                    <div className="site-section">
                        <div className="container">
                            <div className="section-title">
                                <h2>New information</h2>
                            </div>
                            <div className="row">

                                <div className="col-lg-6">

                                    {blog.map((blog) => (
                                        <form action="/blog" method="DELETE">
                                            <div className="post-entry-2 d-flex">
                                                <div className="thumbnail"
                                                     style={{backgroundImage: 'url(/images/big_img_1.jpg)'}}>
                                                </div>
                                                <div className="contents">
                                                    <h2><Link to={`blog/details/${blog.id}`}>{blog.title}</Link></h2>
                                                    <p className="mb-3">{blog.short_description}</p>


                                                    <input type="submit" name="blogID" value="Delete"/>


                                                    <div className="post-meta">
                                                        <span className="d-block"><Link to="#">USER ID</Link></span>
                                                        <span className="date-read">Jun 14 <span
                                                            className="mx-1">•</span> 3 min read <span
                                                            className="icon-star2">Span</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

module.exports = Section;



