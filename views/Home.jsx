const React = require('react');

import {Root} from 'react-static'
import {Link} from '@reach/router'
import Header from "./Header";
import Footer from "./Footer";


class Home extends React.Component {

    render() {


        return (
            <div>
                <div>
                    <title>{this.props.title}</title>

                    {this.props.children}
                </div>


                <Root>
                    <html>
                    <head>

                        <link rel="stylesheet" type="text/css" href="/grid/display_grid.css"/>

                    </head>

                    <body>
                    <Header/>
                    <div className="background_home_section">
                        <div className="home_page_css">
                            <h1> Practical work by gHost</h1>
                        </div>
                    </div>
                    <Footer/>


                    </body>
                    </html>
                </Root>

            </div>
        )
    }
}

module.exports = Home;

