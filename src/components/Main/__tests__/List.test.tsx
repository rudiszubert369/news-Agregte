import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from '../Views/List';
import { NewsArticle, NewsProps } from '../../../types';

jest.mock('../Modal//withModal', () => (component: React.FC<NewsProps>) => {
  return component;
});

const matchMediaMock = () => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: matchMediaMock,
});

describe('List component', () => {
  const news: NewsArticle[] = [
    {
      title: 'Test article 1',
      description: 'Test description 1',
      url: 'https://example.com/1',
      urlToImage: 'https://example.com/image1.jpg',
      author: 'John doe',
      content: 'lorem ipsum',
      publishedAt: '1989-02-20T00:00:00Z',
      source: {
        name: 'example source 1'
      }
    },
    {
      title: 'Test article 2',
      description: 'Test description 2',
      url: 'https://example.com/2',
      urlToImage: 'https://example.com/image2.jpg',
      author: 'John doe',
      content: 'lorem ipsum',
      publishedAt: '1989-02-20T00:00:00Z',
      source: {
        name: 'example source 2'
      }
    },
  ];

  it('renders the list of news articles', () => {
    render(<List news={news} />);
    expect(screen.getByText('Test article 1')).toBeInTheDocument();
    expect(screen.getByText('Test article 2')).toBeInTheDocument();
    expect(screen.getByText('example source 1')).toBeInTheDocument();
    expect(screen.getByText('example source 2')).toBeInTheDocument();
  });

  it('calls the onClick function when a news article is clicked', () => {
    const onClick = jest.fn();
    const newsWithOnClick = news.map(article => ({ ...article, onClick }));
    render(<List news={newsWithOnClick} />);
    const article1 = screen.getByText('Test article 1');
    fireEvent.click(article1);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
