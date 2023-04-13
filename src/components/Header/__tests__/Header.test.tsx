import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../../store';
import { IntlProvider } from 'react-intl';
import { messages } from '../../../locales/messages';
import { DEFAULT_LANGUAGE_CODE, APP_NAME } from '../../../constants';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe('Header', () => {
  const language = DEFAULT_LANGUAGE_CODE;
  const components = (
    <Provider store={store}>
      <IntlProvider locale={language} messages={messages[language]}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );

  it('renders the app title', () => {
    render(components);
    const appTitle = screen.getByText(APP_NAME);
    expect(appTitle).toBeInTheDocument();
  });

  it('renders the language switcher component', () => {
    const { getByTestId } = render(components);
    const languageSwitcher = getByTestId('language-switcher');
    expect(languageSwitcher).toBeInTheDocument();
  });

  it('renders the view switcher component', () => {
    const { getByTestId } = render(components);
    const viewSwitcher = getByTestId('view-switcher');
    expect(viewSwitcher).toBeInTheDocument();
  });
});
