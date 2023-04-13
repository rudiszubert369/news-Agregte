import React from 'react';
import { ModalProps } from '../../../types';
import { Modal, Typography, Divider } from 'antd';
import { FormattedMessage } from 'react-intl';

const { Title, Text, Link } = Typography;

const CustomModal = ({ isOpen, onClose, article }: ModalProps) => {
  if (!article) return null;

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      <Title level={3}>{article.title}</Title>
      <Text>{article.content}</Text>
      <Divider />
      <Text>
        <Link href={article.url} target="_blank" rel="noopener noreferrer" >
          <FormattedMessage
            id="visitSource"
            defaultMessage="Go to source"
            description="news source link"
          />
        </Link>
      </Text>
      {article.author && (
        <>
          <Divider />
          <Text style={{ color: '#6C43BF' }}>
            <FormattedMessage
              id="author"
              defaultMessage="Author:"
              description="news author"
            />
            {`: ${article.author}`}
          </Text>
        </>
      )}
    </Modal>
  );
};

export default CustomModal;
