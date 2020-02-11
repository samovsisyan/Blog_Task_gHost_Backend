import {useState} from "react";

const React = require('react');
const Wrapper = require('./Wrapper');
// import Admin from './pages/Admin';
// import Section from './pages/Section';
// const BlogDetails = require('./pages/BlogDetails');

// import {I18nProvider, LOCALES} from './i18n';
// import { FormattedMessage } from 'react-intl';

// import translate from "./i18n/translate";
import counterpart from 'counterpart';

import Translate from 'react-translate-component'
import en from "./lang/en";
import ru from "./lang/ru";

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);

counterpart.setLocale('en');


const Link = (props) => {
    return (
    <Translate
        content={props.content}
        component="a"
        href="//google.com"
        target= "_blank"
    />
)
}

class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        lang: "en"
    };
}


    onLangChange (e) {
        this.setState({lang: e.target.value})
        counterpart.setLocale(e.target.value);

    }

    render() {
        const link =<Link content="link" />
        console.log(this.state,555555555555555555)
        // const placeholder = counterpart.translate("placeholder")
        return (
            <Wrapper>
                <h1>Hello Home react-translate-component</h1>

                <select value={this.state.lang} onChange={this.onLangChange}>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                </select>
                
                   <Translate content="title"  component ="h1" className="class" />

                   <Translate content="copy.p1"  component ="p" unsafe={true} />

                   <Translate content="copy.p2" component ="p" with={{link}} />


                   <Translate component ="input"  type="text" attributes={{placeholder: "placeholder"}} />



                {/*<I18nProvider locale = {locale}>*/}
                {/*    /!*<Admin />*!/*/}
                {/*    /!*<Section />*!/*/}
                {/*    /!*<FormattedMessage id='hello' />*!/*/}
                {/*    {translate("hello")}*/}
                {/*    <h1>Hello Home </h1>*/}
                {/*    {translate("edit", {path: <code>src/App.jsx</code>})}*/}
                {/*    <button onClick={this.handleClick()}>FRENCH</button>*/}
                {/*    /!*<button onClick={()=> setLocale(LOCALES.ELNGLISH)}>ELNGLISH</button>*!/*/}
                {/*    /!*<button onClick={()=> setLocale(LOCALES.FRENCH)}>FRENCH</button>*!/*/}


                {/*</I18nProvider>*/}



            </Wrapper>
        )
    }
}


module.exports = Home;
