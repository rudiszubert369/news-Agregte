import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ViewSwitcher from '../ViewSwitcher';
import { VIEW_TYPE_LIST } from '../../../constants';
import { IntlProvider } from 'react-intl';
import { messages } from '../../../locales/messages';
import { DEFAULT_LANGUAGE_CODE } from '../../../constants'

const mockStore = configureStore([]);

describe('ViewSwitcher component', () => {
  const initialState = {
    view: {
      view: VIEW_TYPE_LIST,
    },
  };

  const store = mockStore(initialState);

  const components = (
    <Provider store={store}>
      <IntlProvider 
        locale={DEFAULT_LANGUAGE_CODE}
        messages={messages[DEFAULT_LANGUAGE_CODE]}
      >
        <ViewSwitcher />
      </IntlProvider>
    </Provider>
  );

  it('should render correct dropdown selected value', () => {
    render(components);
    expect(screen.getByTestId('view-switcher')).toBeInTheDocument();
    expect(screen.getByText(messages.pl.listView)).toBeInTheDocument();
  });
});
