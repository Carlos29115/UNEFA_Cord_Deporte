import { Box, Modal } from '@mui/material';
import React from 'react';
import { TCustomModalProps } from 'types';
import styles from './CustomModal.module.scss';
import CustomModalContent from './CustomModalContent';
import CustomModalHeader from './CustomModalHeader';

const CustomModal = ({
  openModal = false,
  setOpenModal,
  children,
  modalTitle = '(Sin titulo)',
  isViewCompleted = false
}: TCustomModalProps) => {
  const handleClose = () => setOpenModal({ modalCreate: false });

  return (
    <Modal open={!!openModal}>
      <Box
        className={
          !isViewCompleted ? styles['custom-modal'] : styles['custom-modal_2']
        }>
        <section
          className={
            !isViewCompleted
              ? styles['custom-modal__container']
              : styles['custom-modal__container-2']
          }>
          <CustomModalHeader closeModal={handleClose} modalTitle={modalTitle} />
          <CustomModalContent>
            {children}
          </CustomModalContent>
        </section>
      </Box>
    </Modal>
  );
};
export default React.memo(CustomModal);
