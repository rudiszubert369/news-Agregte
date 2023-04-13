import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import configureStore from 'redux-mock-store';
import { IntlProvider } from 'react-intl';
import { messages } from '../../../locales/messages';
import { DEFAULT_LANGUAGE_CODE } from '../../../constants';
import useCurrentTime from '../../../hooks/useCurrentTime';
import { Provider } from 'react-redux';

jest.mock('../../../hooks/useCurrentTime');

const mockStore = configureStore([]);

describe('Footer component', () => {
  const mockCurrentTime = '2022-03-29T09:30:00Z';


  beforeEach(() => {
    (useCurrentTime as jest.Mock).mockReturnValue(mockCurrentTime);
  });

  it('should render the article count when higher than 0', () => {
    const initialState = {
      articleCount: {
        count: 10,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LANGUAGE_CODE} messages={messages[DEFAULT_LANGUAGE_CODE]}>
          <Footer />
        </IntlProvider>
      </Provider>
    );

    const countValueElement = screen.getByText('10');
    expect(countValueElement).toBeInTheDocument();
  });

  it('should not render the article count when articles are 0', () => {
    const initialState = {
      articleCount: {
        count: 0,
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LANGUAGE_CODE} messages={messages[DEFAULT_LANGUAGE_CODE]}>
          <Footer />
        </IntlProvider>
      </Provider>
    );

    const articleCountElement = screen.queryByText(/Liczba artykułów:/i);
    expect(articleCountElement).not.toBeInTheDocument();
  });

  it('should render the current time', () => {
    const initialState = {
      articleCount: {
        count: 0,
      },
    };
    const store = mockStore(initialState);

    
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LANGUAGE_CODE} messages={messages[DEFAULT_LANGUAGE_CODE]}>
          <Footer />
        </IntlProvider>
      </Provider>
    );

    const timeElement = screen.getByText(mockCurrentTime);
    expect(timeElement).toBeInTheDocument();
  });
});
