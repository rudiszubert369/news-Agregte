import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideMenu from '../SideMenu';
import { SUPPORTED_COUNTRIES_LIST } from '../../../constants';
import { IntlProvider } from 'react-intl';
import { messages } from '../../../locales/messages';
import { SECONDARY_LANGUAGE_CODE } from '../../../constants';


describe('SideMenu', () => {
  const language = SECONDARY_LANGUAGE_CODE;
  const components = (
    <IntlProvider locale={language} messages={messages[language]}>
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>
    </IntlProvider>
  )

  it('renders links to each country', () => {
    render(components);

    const linkElements = screen.getAllByRole('link');
    const countryNames = linkElements.map((link) => {
      const textContent = link.textContent;
      return textContent ? textContent.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '').trim() : '';
    });
    
    const expectedCountryNames = SUPPORTED_COUNTRIES_LIST.map((country) => country.name);

    expect(countryNames).toEqual(expect.arrayContaining(expectedCountryNames));
  });

  it('renders a flag icon for each country', () => {
    render(components);

    const flagElements = screen.getAllByRole('img');

    expect(flagElements.length).toBe(SUPPORTED_COUNTRIES_LIST.length);
  });
});
