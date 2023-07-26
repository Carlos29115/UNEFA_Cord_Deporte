import { DatePickerProps } from '@mui/lab';
import {
  BaseTextFieldProps,
  InputLabelProps,
  SelectProps
} from '@mui/material';
// import { TCheckedState } from 'types'
import { FieldValues, UseControllerProps } from 'react-hook-form';

export interface IFormFields
  extends BaseTextFieldProps,
    UseControllerProps<FieldValues> {
  readOnly?: boolean;
  rules?: object;
  name: string;
  defaultValue?: null | number | string;
  autoFocus?: boolean;
  labelProps?: InputLabelProps;
  errmsg?: {
    message?: string;
  };
  handleBlur?: () => void;
  value?: (payload?: string | string[]) => Record<string, unknown>;
  views?: number;
  mask?: boolean;
  handleChange?: (e: any) => void;
  adornment?: any;
  viewAdornment?: boolean;
  options?: any;
}

export interface ISelectFields extends SelectProps, UseControllerProps {
  itemId?: number | string;
  itemLabel?: string;
  name: string;
  handleChange?: (e: any, name: any) => void;
  defaultValue?: null | number | string | boolean;
  options?: Record<string, unknown>[];
}
export interface ISwitchFields extends IFormFields {
  checked: boolean;
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IDateFields extends IFormFields {
  shrink: boolean | undefined;
}
export type TOptionsChecked = { [index: string]: string | number };

// export interface ICheckFields extends IFormFields {
//   options: TOptionsChecked[]
//   checkedState: Record<string, boolean>
//   setCheckedState: React.Dispatch<React.SetStateAction<TCheckedState>>
//   handleCheck: (
//     event: React.ChangeEvent<HTMLInputElement>,
//     stateChecked: TCheckedState,
//     setCheckedState: React.Dispatch<React.SetStateAction<TCheckedState>>,
//   ) => void
//   itemId?: string
//   itemLabel?: string
//   error?: boolean
//   classNameGroup?: string
// }

export interface IDatePick
  extends DatePickerProps<unknown>,
    UseControllerProps {
  name: string;
  rules?: object;
  errmsg?: {
    message?: string;
  };
  error?: boolean;
  variant?: string;
}
