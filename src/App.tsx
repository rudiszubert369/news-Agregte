import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { HelmetProvider } from 'react-helmet-async';
import { messages } from './locales/messages';
import { RootState } from './store';
import SEO from './components/Seo/SEO';
import Layout from './components/Layout/Layout'

const App = () => {
  const language = useSelector((state: RootState) => state.language.language);

  return (
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <HelmetProvider>
            <SEO />
            <Layout />
          </HelmetProvider>
        </Router>
     </IntlProvider>
  );
};

export default App;
