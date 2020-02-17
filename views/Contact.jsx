const React = require('react');
import Header from "./Header";
import Footer from "./Footer";


class Home extends React.Component {

    render() {
        return (
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" data-aos-easing="slide"
                 data-aos-duration="800" data-aos-delay="0">
                <Header/>

                <h1> Contact</h1>
                <Footer/>
            </div>
        )
    }
}

module.exports = Home;
