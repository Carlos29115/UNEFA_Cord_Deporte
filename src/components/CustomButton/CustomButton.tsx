import { Button, ButtonClasses, CircularProgress } from "@mui/material";
import { ReactNode } from "react";

const CustomButton = ({
  label,
  typeVariant,
  onClick,
  typeAction,
  disabled,
  typeSize,
  className,
}: TCustomButtonProps) => {
  return (
    <Button
      variant={typeVariant}
      onClick={onClick}
      size={typeSize}
      type={typeAction}
      disabled={disabled}
      className={className ?? ''}
    >
      {disabled? <CircularProgress />:label}
    </Button>
  );
};

export type TCustomButtonProps = {
  typeVariant?: "text" | "outlined" | "contained" | undefined;
  label: string | ReactNode;
  typeAction?: "submit" | "button" | "reset" | undefined;
  onClick?: (param?: unknown) => typeof param | void;
  disabled?: boolean | undefined;
  typeSize?: "small" | "medium" | "large";
  className?: string
};

export default CustomButton;
