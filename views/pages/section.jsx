const React = require('react');


import { Root } from 'react-static'
import { Link } from '@reach/router'
import Wrapper from "../Wrapper";



class Section extends React.Component {

    render() {

        // style = {{width: "1284px"}}
        // style={{transform: `translate3d(${-3852}px, ${0}px, ${0}px)`,  transition: `${all} 1s ${ease} 0s`, `width: ${7704}px`}}

        return (
<Wrapper>
<div className="site-section py-0">
    <div className="owl-carousel hero-slide owl-style owl-loaded owl-drag">


        <div className="owl-stage-outer">
            <div className="owl-stage"
            >
                <div className="owl-item cloned" >
                    <div className="site-section">
                        <div className="container">
                            <div className="half-post-entry d-block d-lg-flex bg-light">
                                <div className="img-bg"
                                     style={{backgroundImage: 'url(images/big_img_1.jpg)'}}>div</div>
                                <div className="contents">
                                    <span className="caption">Editor's Pick</span>
                                    <h2><Link to="blog-single.html">News Needs to Meet Its Audiences Where They
                                        Are</Link ></h2>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim
                                        vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore
                                        deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi
                                        consectetur doloribus aliquam accusantium beatae?</p>

                                    <div className="post-meta">
                                                <span className="d-block"><Link to="#">Dave Rogers</Link > in <Link
                                                    to="#">Food</Link></span>
                                        <span className="date-read">Jun 14 <span className="mx-1">s</span> 3 min read <span
                                            className="icon-star2">Span</span></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div className="owl-nav">
            {/*<div className="owl-prev"><span className="icon-arrow_back">Span</span></div>*/}
            {/*<div className="owl-next"><span className="icon-arrow_forward">Span</span></div>*/}
        </div>
        <div className="owl-dots">
            <div className="owl-dot"><span>Span</span></div>
            <div className="owl-dot active"><span>Span</span></div>
        </div>
    </div>
</div>
    </Wrapper>
        )
    }
}
module.exports = Section;