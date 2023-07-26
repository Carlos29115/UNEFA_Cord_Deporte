import { ReactNode } from "react";
/**
 * @method type TCustomModalProps
 */
export type TCustomModalProps = {
  openModal: boolean;
  setOpenModal: any;
  children: ReactNode;
  modalTitle?: string;
  isViewCompleted?: boolean;
};
/**
 * @method type TModalTitleProps
 */
export type TModalTitleProps = {
  title: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};
/**
 * @method type TModalChildrenProps
 */
export type TModalChildrenProps = {
  children: ReactNode;
};
/**
 * @method type TOpenModals
 */

export type TOpenModals = {
  [index: string]: boolean;
  
};
