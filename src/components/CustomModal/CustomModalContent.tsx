import { ReactNode } from 'react'
import styles from './CustomModal.module.scss'

const CustomModalContent = ({ children }: TModalChildrenProps) => {
  return <div className={styles['custom-modal__children']}>{children}</div>
}

export type TModalChildrenProps = {
  children: ReactNode
}

export default CustomModalContent
