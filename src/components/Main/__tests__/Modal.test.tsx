import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../Modal/Modal';
import { NewsArticle } from '../../../types';
import { IntlProvider } from 'react-intl';
import { messages } from '../../../locales/messages';
import { DEFAULT_LANGUAGE_CODE } from '../../../constants';

describe('Modal', () => {
  const article: NewsArticle = {
    title: 'Test article',
    content: 'This is the test article content.',
    description: 'This is the test article description.',
    publishedAt: '2022-03-01T10:00:00Z',
    source: { name: 'Test Source' },
    author: 'Test Author',
    url: 'https://test-article.com',
  };

  const onClose = () => console.log('onClose function called');
  const language = DEFAULT_LANGUAGE_CODE;
  const components = (
    <IntlProvider locale={language} messages={messages[language]}>
      <Modal isOpen={true} onClose={onClose} article={article}/>
    </IntlProvider>
  )

  it('renders the article title', () => {
    render(components);
    const titleElement = screen.getByText(article.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the article content', () => {
    render(components);
    const contentElement = screen.getByText(article.content);
    expect(contentElement).toBeInTheDocument();
  });

  it('renders the article author', () => {
    render(components);
    const authorElement = screen.getByText(`Autor: ${article.author}`);
    expect(authorElement).toBeInTheDocument();
  });

  it('renders the article source link', () => {
    render(components);
    const linkElement = screen.getByRole('link', { name: 'Odwiedź źródło' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(article.url);
    expect(linkElement.getAttribute('target')).toBe('_blank');
    expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
