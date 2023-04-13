import React, { useState } from 'react';
import { NewsArticle, NewsProps } from '../../../types';
import Modal from './Modal';

const withModal = (WrappedComponent: React.ComponentType<NewsProps>) => {
  const WithModal = ({ news }: NewsProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

    const handleOpenModal = (article: NewsArticle) => {
      setSelectedArticle(article);
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setSelectedArticle(null);
      setModalOpen(false);
    };

    return (
      <>
        <WrappedComponent
          news={news.map((article) => ({ ...article, onClick: () => handleOpenModal(article) }))}
        />
        <Modal isOpen={modalOpen} onClose={handleCloseModal} article={selectedArticle} />
      </>
    );
  };

  return WithModal;
};

export default withModal;
