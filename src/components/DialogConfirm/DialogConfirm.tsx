import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

import styles from './DialogConfirm.module.scss'
import { TOpenModals } from 'types'

const DialogConfirm = ({
  title,
  children,
  setOpenModal,
  openModal,
  onDelete,
  idRow,
}: TDialogConfirmProps) => {
  const handleClose = () => {
    setOpenModal({ dialogDelete: false })
  }

  return (
    <Dialog className={styles['dialog-container']} open={openModal} onClose={handleClose}>
      <DialogTitle className={styles['dialog-confirm__title']}>{title}</DialogTitle>
      <DialogContent className={styles['dialog-confirm__children']}>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions className={styles['dialog-confirm__actions']}>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={() => onDelete(idRow)}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}
export type TDialogConfirmProps = {
  openModal: boolean
  title: string
  children: React.ReactNode
  setOpenModal: any
  onDelete: (id: unknown) => Promise<void>
  idRow: unknown
}

export default React.memo(DialogConfirm)
