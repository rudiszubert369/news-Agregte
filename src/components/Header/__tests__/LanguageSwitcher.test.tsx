import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import LanguageSwitcher from '../LanguageSwitcher';
import configureStore from 'redux-mock-store';
import { DEFAULT_LANGUAGE_CODE, DEFAULT_LANGUAGE_NAME } from '../../../constants';

const mockStore = configureStore([]);

describe('LanguageSwitcher', () => {
  const store = mockStore({
    language: {
      language: DEFAULT_LANGUAGE_CODE,
    },
  });

  it('renders correctly and shows a language that corresponds with the one in store', () => {
    render(
      <Provider store={store}>
        <LanguageSwitcher />
      </Provider>
    );
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_LANGUAGE_NAME)).toBeInTheDocument();
  });
});
