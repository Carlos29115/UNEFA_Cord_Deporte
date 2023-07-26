import React from 'react'
import { TUseFormHookProps } from 'types'
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import styles from './Form.module.scss'

const Form: React.FC<FormProps> = ({ handleSubmit, onSubmit, children }) => {
  return (
    <form
      className={styles['form']}
      onSubmit={handleSubmit(onSubmit as SubmitHandler<TUseFormHookProps>)}
    >
      {children}
    </form>
  )
}

export type FormProps = {
  handleSubmit: UseFormHandleSubmit<TUseFormHookProps>
  onSubmit: unknown
  children: React.ReactNode
}

export default Form
