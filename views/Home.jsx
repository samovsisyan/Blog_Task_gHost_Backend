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
                    <div>
                        <Link to="admin/home">Admin</Link>
                        <Link to="">Blog</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

module.exports = Home;

