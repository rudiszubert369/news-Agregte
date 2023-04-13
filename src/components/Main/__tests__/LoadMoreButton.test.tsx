import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoadMoreButton from '../Content/LoadMoreButton';
import { IntlProvider } from 'react-intl';
import { messages } from '../../../locales/messages';
import { DEFAULT_LANGUAGE_CODE } from '../../../constants'
import { MemoryRouter } from 'react-router-dom';

const matchMediaMock = () => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: matchMediaMock,
});

describe('<LoadMoreButton />', () => {
  const mockLoadMore = jest.fn();

  it('should call the loadMore function when the button is clicked', () => {
    const { getByRole } = render(  
    <IntlProvider 
      locale={DEFAULT_LANGUAGE_CODE}
      messages={messages[DEFAULT_LANGUAGE_CODE]}
    >
      <MemoryRouter>
        <LoadMoreButton loadMore={mockLoadMore} />
      </MemoryRouter>
    </IntlProvider>);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockLoadMore).toHaveBeenCalled();
  });
});