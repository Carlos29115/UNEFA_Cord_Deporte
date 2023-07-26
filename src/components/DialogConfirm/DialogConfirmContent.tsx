import { DialogContent, DialogContentText } from '@mui/material'
import { ReactNode } from 'react'
import styles from './DialogConfirm.module.scss'

const DialogConfirmContent = ({ children }: TDialogConfirmChildrenProps) => {
  return (
    <DialogContent className={styles['dialog-confirm__children']}>
      <DialogContentText>{children}</DialogContentText>
    </DialogContent>
  )
}

export type TDialogConfirmChildrenProps = {
  children: ReactNode
}

export default DialogConfirmContent
