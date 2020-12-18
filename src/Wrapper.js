import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Finnish from './lang/fi.json';
import English from './lang/en.json';
import Swedish from './lang/se.json';
import German from './lang/de.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'fi') {
	lang = Finnish;
} else if (local === 'de') {
	lang = German;
} else if (local === 'se') {
	lang = Swedish;
} else {
	lang = English;
}

const Wrapper = (props) => {
	const [ locale, setLocale ] = useState(local);
	const [ messages, setMessages ] = useState(lang);

	const selectLanguage = (e) => {
		const newLocale = e.target.value;
		setLocale(newLocale);
		if (newLocale === 'fi') {
			setMessages(Finnish);
		} else if (newLocale === 'de') {
			setMessages(German);
		} else if (newLocale === 'se') {
			setMessages(Swedish);
		} else {
			setMessages(English);
		}
	};

	return (
		<Context.Provider value={{ locale, selectLanguage }}>
			<IntlProvider messages={messages} locale={locale}>
				{props.children}
			</IntlProvider>
		</Context.Provider>
	);
};

export default Wrapper;
