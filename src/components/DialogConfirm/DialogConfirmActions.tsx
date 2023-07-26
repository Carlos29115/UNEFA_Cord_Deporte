import { DialogActions } from '@mui/material'
import { CustomButton } from '../CustomButton'
import styles from './DialogConfirm.module.scss'

const DialogConfirmActions = () => {
  return (
    <DialogActions className={styles['dialog-confirm__actions']}>
      <CustomButton label='Cancelar' />
      <CustomButton label='Agregar' />
    </DialogActions>
  )
}

export default DialogConfirmActions
