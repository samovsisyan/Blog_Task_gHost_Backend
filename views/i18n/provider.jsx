import React, {Component, Fragment} from 'react';
import { IntlProvider } from "react-intl";

import { LOCALES } from './locales';
import messages from './messages'

const Provider = ({children, locale = LOCALES.ELNGLISH}) => (
    <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
    >
        {children}
    </IntlProvider>
);

export default Provider;
