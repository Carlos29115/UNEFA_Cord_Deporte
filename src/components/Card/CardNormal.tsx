import { ReactNode } from "react";
import styles from "./Card.module.scss";

const CardNormal = ({ children }: TCardProps) => {
  return <div className={styles["main_card_normal"]}>{children}</div>;
};

export type TCardProps = {
  children: ReactNode;
};
export default CardNormal;
