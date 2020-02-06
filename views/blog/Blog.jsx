// const React = require('react');
// const Wrapper = require('../Wrapper');
//
//
// class Blog extends React.Component {
//     render() {
//         const {blog} = this.props;
//         return (
//             <Wrapper>
//
//                 {/*<h1>{blog}</h1>*/}
//                 {blog.map(image => <div><Product images={image.title} /></div>)}
//
//                     </Wrapper>
//         )
//     }
// }
//
// module.exports = Blog;

// import React, from 'react'
// import Wrapper, from '../Wrapper'
// const React = require('react');
// const Wrapper = require('../Wrapper');
// // const BrowserRouter = require("react-router-dom").BrowserRouter;
// // const Route = require("react-router-dom").Route;
// // const Switch = require("react-router-dom").Switch;
// // const Redirect = require("react-router-dom").Redirect
//
//
// class Blog extends React.Component {
//
//
//
//     render() {
//         const {blog} = this.props;
//
//         console.log(51551)
//         return (
//             <Wrapper>
//             <div>
//
//                 {blog.map((blog) => (
//                         <div>
//                             <ul>
//                                 <li>{blog.title}</li>
//                                 <li>{blog.description}</li>
//                                 <li>{blog.img}</li>
//                             </ul>
//                         </div>
//                     )
//                 )
//                 }
//             </div>
//             </Wrapper>
//         );
//     }
// }
//
// export default Blog;

const React = require('react');
const Wrapper = require('../Wrapper');

class Blog extends React.Component {

    render() {
        const {blog, comments} = this.props;
        console.log(this.props,77777777777777777777777)
        return (
            <Wrapper>
                <div>
                    {
                        blog.map((blog) => (
                                <div>
                                    <h2><a href={`blog/details/${blog.id}`}>{blog.title} </a></h2>
                                    <h3>
                                        {blog.short_description}
                                    </h3>
                                </div>
                            )
                        )
                    }








                </div>
            </Wrapper>
        )
    }
}


module.exports = Blog;

