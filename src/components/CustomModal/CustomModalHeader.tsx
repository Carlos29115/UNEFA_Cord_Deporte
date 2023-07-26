import { IconButton, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import styles from './CustomModal.module.scss'
const CustomModalHeader = ({ closeModal, modalTitle }: TModalTitleProps) => {
  return (
    <div className={styles['custom-modal__box-title']}>
      <Typography
        className={styles['custom-modal__title']}
        variant='h5'
        fontWeight='bold'
      >
        {modalTitle ?? ''}
      </Typography>

      <Tooltip
        title='Cerrar'
        onClick={() => closeModal()}
        className={styles['custom-modal__tooltip']}
      >
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}
/**
 * @method type TModalTitleProps
 */
export type TModalTitleProps = {
  closeModal: () => void
  modalTitle?: string
}
export default CustomModalHeader
