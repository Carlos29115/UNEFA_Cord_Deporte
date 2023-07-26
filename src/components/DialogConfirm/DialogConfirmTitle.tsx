import { DialogTitle } from '@mui/material'
import styles from './DialogConfirm.module.scss'

const DialogConfirmTitle = ({ title }: TDialogConfirmProps) => {
  return <DialogTitle className={styles['dialog-confirm__title']}>{title}</DialogTitle>
}

export type TDialogConfirmProps = {
  title: string
}

export default DialogConfirmTitle
