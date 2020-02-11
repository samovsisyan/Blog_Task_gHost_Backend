import {useState} from "react";

const React = require('react');
const Wrapper = require('./Wrapper');
// import Admin from './pages/Admin';
// import Section from './pages/Section';
// const BlogDetails = require('./pages/BlogDetails');

import {I18nProvider, LOCALES} from './i18n';
// import { FormattedMessage } from 'react-intl';

import translate from "./i18n/translate";

class Home extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                locale: LOCALES.ELNGLISH,
            }
        }

        handleClick = () => {
            this.setState({
                locale: LOCALES.FRENCH
            })
            console.log(this.state.locale,4444444444444444)
        }



    render() {

    // const [locale, setLocale] = useState(LOCALES.ELNGLISH);

    const {locale, setLocale} = this.state;
        return (
            <Wrapper>
                <I18nProvider locale = {locale}>
                    {/*<Admin />*/}
                    {/*<Section />*/}
                    {/*<FormattedMessage id='hello' />*/}
                    {translate("hello")}
                    <h1>Hello Home </h1>
                    {translate("edit", {path: <code>src/App.jsx</code>})}
                    <button onClick={this.handleClick()}>FRENCH</button>
                    {/*<button onClick={()=> setLocale(LOCALES.ELNGLISH)}>ELNGLISH</button>*/}
                    {/*<button onClick={()=> setLocale(LOCALES.FRENCH)}>FRENCH</button>*/}


                </I18nProvider>
            </Wrapper>
        )
    }
}


module.exports = Home;
