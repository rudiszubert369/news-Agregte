import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledModalContent = styled.div`
  padding: 16px;
`;

const ProjectSummaryPopup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={openModal}>
        Popup
      </Button>
      <Modal
        open={modalVisible}
        onCancel={closeModal}
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
      >
        <StyledModalContent>
        <FormattedMessage
          id="popup"
          description="Custom popup text"
        />
        </StyledModalContent>
      </Modal>
    </>
  );
};

export default ProjectSummaryPopup;
