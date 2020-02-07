const React = require('react');


import {Root} from 'react-static'
import {Link} from '@reach/router'
import Wrapper from "../Wrapper";


class Section extends React.Component {

    render() {
        const {blog, comments} = this.props;
        // console.log(this.props, 77777777777777777777777);

        const blog_reversed = blog.reverse();
        console.log(blog_reversed, 5555555555555555555555);
        // style = {{width: "1284px"}}
        // style={{transform: `translate3d(${-3852}px, ${0}px, ${0}px)`,  transition: `${all} 1s ${ease} 0s`, `width: ${7704}px`}}

        return (
            <Wrapper data-spy="scroll" data-target=".site-navbar-target" data-offset="300" data-aos-easing="slide"
                     data-aos-duration="800" data-aos-delay="0">


                <div class="site-wrap">
                    <div className="site-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title">
                                        <h2>New information</h2>
                                    </div>
                                    {blog.map((blog) => (
                                        <div className="post-entry-2 d-flex">
                                            <div className="thumbnail"
                                                 style={{backgroundImage: 'url(images/big_img_1.jpg)'}}>
                                            </div>
                                            <div className="contents">
                                                <h2><Link to="blog-single.html">{blog.title}</Link></h2>
                                                <p className="mb-3">{blog.short_description}</p>
                                                <div className="post-meta">
                                                    <span className="d-block"><Link to="#">USER ID</Link></span>
                                                    <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                        className="icon-star2">Span</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-lg-6">
                                    <div className="section-title">
                                        <h2>Old information</h2>
                                    </div>
                                    {blog_reversed.map((blog) => (
                                        <div className="post-entry-2 d-flex">
                                            <div className="thumbnail"
                                                 style={{backgroundImage: 'url(images/big_img_1.jpg)'}}>
                                            </div>
                                            <div className="contents">
                                                <h2><Link to="blog-single.html">{blog.title}</Link></h2>
                                                <p className="mb-3">{blog.short_description}</p>
                                                <div className="post-meta">
                                                    <span className="d-block"><Link to="#">USER ID</Link></span>
                                                    <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span
                                                        className="icon-star2">Span</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

module.exports = Section;

{/*/!*{blog.map((blog) => (*!/*/
}
{/*/!*            <div>*!/*/
}
{/*/!*                <h2><Link to={`blog/details/${blog.id}`}>{blog.title} </Link> </h2>*!/*/
}
{/*/!*                <h3>*!/*/
}
{/*/!*                    {blog.short_description}*!/*/
}
{/*/!*                </h3>*!/*/
}
{/*/!*            </div>*!/*/
}
{/*/!*        ))}*!/*/
}

{/*/!*    {blog.map((blog) => (*!/*/
}

{/*/!*<div className="site-section py-0">*!/*/
}
{/*/!*    <div className="owl-carousel hero-slide owl-style owl-loaded owl-drag">*!/*/
}


{/*/!*        <div className="owl-stage-outer">*!/*/
}
{/*/!*            <div className="owl-stage"*!/*/
}
{/*/!*            >*!/*/
}
{/*/!*                <div className="owl-item cloned" >*!/*/
}
{/*/!*                    <div className="site-section">*!/*/
}
{/*/!*                        <div className="container">*!/*/
}
{/*/!*                            <div className="half-post-entry d-block d-lg-flex bg-light">*!/*/
}
{/*/!*                                <div className="img-bg"*!/*/
}
{/*/!*                                     style={{backgroundImage: 'url(images/big_img_1.jpg)'}}>div</div>*!/*/
}
{/*/!*                                <div className="contents">*!/*/
}
{/*/!*                                    <span className="caption">Editor's Pick</span>*!/*/
}
{/*/!*                                    <h2><Link to={`blog/details/${blog.id}`}>{blog.title}</Link ></h2>*!/*/
}
{/*/!*                                    <p className="mb-3">{blog.short_description}</p>*!/*/
}

{/*/!*                                    <div className="post-meta">*!/*/
}
{/*/!*                                                <span className="d-block"><Link to="#">Dave Rogers</Link > in <Link*!/*/
}
{/*/!*                                                    to="#">Food</Link></span>*!/*/
}
{/*/!*                                        <span className="date-read">Jun 14 <span className="mx-1">s</span> 3 min read <span*!/*/
}
{/*/!*                                            className="icon-star2">Span</span></span>*!/*/
}
{/*/!*                                    </div>*!/*/
}

{/*/!*                                </div>*!/*/
}
{/*/!*                            </div>*!/*/
}
{/*/!*                        </div>*!/*/
}
{/*/!*                    </div>*!/*/
}
{/*/!*                </div>*!/*/
}


{/*/!*            </div>*!/*/
}
{/*/!*        </div>*!/*/
}
{/*/!*        <div className="owl-nav">*!/*/
}
{/*/!*            /!*<div className="owl-prev"><span className="icon-arrow_back">Span</span></div>*!/*!/*/
}
{/*/!*            /!*<div className="owl-next"><span className="icon-arrow_forward">Span</span></div>*!/*!/*/
}
{/*/!*        </div>*!/*/
}
{/*/!*        <div className="owl-dots">*!/*/
}
{/*/!*            <div className="owl-dot"><span>Span</span></div>*!/*/
}
{/*/!*            <div className="owl-dot active"><span>Span</span></div>*!/*/
}
{/*/!*        </div>*!/*/
}
{/*/!*    </div>*!/*/
}
{/*/!*</div>*!/*/
}
{/*/!*    ))}*!/*/
}


{/*    <div className="site-section">*/
}
{/*        <div className="container">*/
}
{/*            <div className="row">*/
}
{/*                <div className="col-lg-8">*/
}
{/*                    <div className="row">*/
}
{/*                        <div className="col-12">*/
}
{/*                            <div className="section-title">*/
}
{/*                                <h2>Editor's Pick</h2>*/
}
{/*                            </div>*/
}
{/*                        </div>*/
}
{/*                    </div>*/
}
{/*                    <div className="row">*/
}
{/*                        <div className="col-md-6">*/
}
{/*                            <div className="post-entry-1">*/
}
{/*                                <Link to="post-single.html">*/
}
{/*                                    <img src="images/img_h_1.jpg" alt="Image"*/
}
{/*                                         className="img-fluid"/></Link>*/
}
{/*                                <h2><Link to="blog-single.html">fjkvndscs</Link></h2>*/
}
{/*                                <p>{blog.description}</p>*/
}
{/*                                <div className="post-meta">*/
}
{/*                                    <span className="d-block"><Link to="#">Dave Rogers</Link> USER ID </span>*/
}
{/*                                    <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span*/
}
{/*                                        className="icon-star2">span</span></span>*/
}
{/*                                </div>*/
}
{/*                            </div>*/
}
{/*                        </div>*/
}

{/*                        {blog.map((blog) => (*/
}


{/*                        <div className="col-md-6">*/
}
{/*                            <div className="post-entry-2 d-flex bg-light">*/
}
{/*                                <div className="thumbnail"*/
}
{/*                                     style={{backgroundImage: 'url(images/img_v_1.jpg)'}}>div*/
}
{/*                                </div>*/
}
{/*                                <div className="contents">*/
}
{/*                                    <h2><Link to="blog-single.html">{blog.short_description}</Link>*/
}
{/*                                    </h2>*/
}
{/*                                    <div className="post-meta">*/
}
{/*                                        <span className="d-block"><Link to="#">USER ID</Link></span>*/
}
{/*                                        <span className="date-read">Jun 14 <span*/
}
{/*                                            className="mx-1">•</span> 3 min read <span*/
}
{/*                                            className="icon-star2">span</span></span>*/
}
{/*                                    </div>*/
}
{/*                                </div>*/
}
{/*                            </div>*/
}
{/*                        </div>*/
}
{/*                        ))}*/
}
{/*                    </div>*/
}
{/*                </div>*/
}
{/*                <div className="col-lg-4">*/
}
{/*                    <div className="section-title">*/
}
{/*                        <h2>Trending</h2>*/
}
{/*                    </div>*/
}


{/*                    {blog.map((blog) => (*/
}


{/*                    <div className="trend-entry d-flex">*/
}
{/*                        <div className="number align-self-start">{blog.id}</div>*/
}
{/*                        <div className="trend-contents">*/
}
{/*                            <h2><Link to="blog-single.html">{blog.title}</Link></h2>*/
}
{/*                            <div className="post-meta">*/
}
{/*                                <span className="d-block"><Link*/
}
{/*                                    to="#">Dave Rogers</Link>  USER ID</span>*/
}
{/*                                <span className="date-read">Jun 14 <span className="mx-1">•</span> 3 min read <span*/
}
{/*                                    className="icon-star2">span</span></span>*/
}
{/*                            </div>*/
}
{/*                        </div>*/
}
{/*                    </div>*/
}
{/*                    ))}*/
}
{/*                    <p>*/
}
{/*                        <Link to="#" className="more">See All Trends <span*/
}
{/*                            className="icon-keyboard_arrow_right">span</span></Link>*/
}
{/*                    </p>*/
}

{/*                </div>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </div>*/
}


