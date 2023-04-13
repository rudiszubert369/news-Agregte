import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes';

const CountryNews = () => <div>Country News</div>;
CountryNews.displayName = 'CountryNews';

const NotFound = () => <div>Not Found</div>;
NotFound.displayName = 'NotFound';

jest.mock('../../Main/Content/MainContent', () => CountryNews);
jest.mock('../../Main/NotFound/NotFound', () => NotFound);

describe('AppRoutes component', () => {
  it('should render the CountryNews component for the root path', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <AppRoutes />
        </MemoryRouter>
      );
    });

    const CountryNews = screen.getByText('Country News');
    expect(CountryNews).toBeInTheDocument();
  });

  it('should render the CountryNews component for the /country/:countryName path', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/country/poland']}>
          <AppRoutes />
        </MemoryRouter>
      );
    });

    const countryNewsElement = screen.getByText('Country News');
    expect(countryNewsElement).toBeInTheDocument();
  });

  it('should render the NotFound component for any other path', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/not-found']}>
          <AppRoutes />
        </MemoryRouter>
      );
    });

    const notFoundElement = screen.getByText('Not Found');
    expect(notFoundElement).toBeInTheDocument();
  });
});
