import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound/NotFound';
import { IntlProvider } from 'react-intl';
import { messages } from '../../../locales/messages';
import { DEFAULT_LANGUAGE_CODE } from '../../../constants'
import { MemoryRouter } from 'react-router-dom';

describe('NotFound component', () => {
  const components = (
      <IntlProvider 
        locale={DEFAULT_LANGUAGE_CODE}
        messages={messages[DEFAULT_LANGUAGE_CODE]}
      >
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </IntlProvider>
  );

  it('should render the correct message', () => {
    render(components);
    const message = screen.getByText(messages.pl.notFound404);
    expect(message).toBeInTheDocument();
  });
});
