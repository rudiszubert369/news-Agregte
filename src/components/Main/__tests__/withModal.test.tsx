import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import withModal from '../Modal/withModal';
import { NewsArticle } from '../../../types';
import { IntlProvider } from 'react-intl';
import { messages } from '../../../locales/messages';
import { DEFAULT_LANGUAGE_CODE } from '../../../constants';


const TestComponent: React.FC<{ news: NewsArticle[] }> = ({ news }) => (
  <div>
    {news.map((article, index) => (
      <button key={index} onClick={article.onClick}>
        {article.title}
      </button>
    ))}
  </div>
);

const TestComponentWithModal = withModal(TestComponent);

describe('withModal HOC', () => {
  const news: NewsArticle[] = [
    {
      title: 'Test article 1',
      description: 'Test description 1',
      url: 'https://example.com/1',
      urlToImage: 'https://example.com/image1.jpg',
      author: 'John doe',
      content: 'lorem ipsum',
      publishedAt: '20.02.1989',
      source: {
        name: 'example'
      }
    },
    {
      title: 'Test article 2',
      description: 'Test description 2',
      url: 'https://example.com/2',
      urlToImage: 'https://example.com/image2.jpg',
      author: 'John doe',
      content: 'lorem ipsum',
      publishedAt: '20.02.1989',
      source: {
        name: 'example'
      }
    },
  ];

  const language = DEFAULT_LANGUAGE_CODE;
  const components = (
    <IntlProvider locale={language} messages={messages[language]}>
      <TestComponentWithModal news={news} />
    </IntlProvider>
  )

  it('renders the wrapped component with provided news', () => {
    render(components);
    expect(screen.getByText('Test article 1')).toBeInTheDocument();
    expect(screen.getByText('Test article 2')).toBeInTheDocument();
  });

  it('opens the modal when a news item is clicked', () => {
    render(components);
    const article1Button = screen.getByText('Test article 1');
    fireEvent.click(article1Button);
    expect(screen.getByText('lorem ipsum')).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', () => {
    render(components);
    const article1Button = screen.getByText('Test article 1');
    fireEvent.click(article1Button);
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Test description 1')).not.toBeInTheDocument();
  });
});
