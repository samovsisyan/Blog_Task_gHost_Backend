const React = require('react');
const Wrapper = require('./Wrapper');
// import Admin from './pages/Admin';
// import Section from './pages/Section';
// const BlogDetails = require('./pages/BlogDetails');

import {I18nProvider, LOCALES} from './i18n';


class Home extends React.Component {

    render() {
        return (
            <Wrapper>
                <I18nProvider locale = {LOCALES.ELNGLISH}>
                    {/*<Admin />*/}
                    {/*<Section />*/}
                    <h1>Hello Home </h1>
                </I18nProvider>
            </Wrapper>
        )
    }
}


module.exports = Home;
