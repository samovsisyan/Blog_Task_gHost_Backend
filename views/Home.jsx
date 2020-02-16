import {Link} from "@reach/router";

const React = require('react');
import Header from "./Header";
import Footer from "./Footer";


class Home extends React.Component {

    render() {


        return (
            <div>
                <Header/>
                <div className="project_blog ">
                    <h1>Task gHost</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}

module.exports = Home;

