import {Link} from "@reach/router";

const React = require('react');


class Home extends React.Component {

    render() {

        const blog = this.props

        return (
            <div>

                <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/grid/display_grid.css"/>

                </head>

                <body>
                <div id="project_blog">
                    <div className="grid">
                        <header>
                            <div className="blog_img_logo">
                                <img src="/images/blog.jpg" alt="Img Blog"/>
                            </div>
                            <div className="blog_manu">

                                <Link to="index.html">Home</Link>


                                <Link to="categories.html">Categories</Link>


                                <Link to="categories.html">Politics</Link>


                                <Link to="categories.html">Business</Link>


                                <Link to="categories.html">Health</Link>

                                <Link to="categories.html">Design</Link>

                                <Link to="categories.html">Sport</Link>

                                <Link to="contact.html">Contact</Link>


                            </div>
                        </header>

                        <article><h1>Section</h1> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the
                        </article>



                        <aside>
                            <div>
                                <div className="img_blog"
                                     style={{backgroundImage: 'url(/images/person_1.jpg)'}}>
                                </div>
                                <h2><Link to="blog/details">Title</Link></h2>
                                <p className="mb-3">short_description</p>
                            </div>
                        </aside>


                        <footer>Footer</footer>
                    </div>
                </div>
                </body>
                </html>
            </div>
        )
    }
}

module.exports = Home;

