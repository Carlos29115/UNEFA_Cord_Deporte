import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { memo } from "react";
import { Controller } from "react-hook-form";
import styles from "./Fields.module.scss";

const CheckField: React.FC<any> = ({
  name = "",
  control,
  label,
  defaultValue = "",
  rules = {},
  options = [],
  checkedState = {},
  handleCheck,
  setCheckedState,
  itemId = "id",
  itemLabel = "name",
  error = false,
  classNameGroup = "check_field__group-content",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <FormControl
          component="fieldset"
          required
          error={error}
          variant="standard"
        >
          <FormLabel
            className={styles["check_field__title"]}
            component="legend"
          >
            {label}
          </FormLabel>
          <div
            className={`${styles["check_field__group"]} ${
              error ? styles["check_field__group-error"] : ""
            }`}
          >
            <FormGroup className={`${styles[classNameGroup]}`}>
              {options.map((option: Record<string, unknown>) => {
                return (
                  <FormControlLabel
                    className={styles["check_field__item"]}
                    key={option[itemId] as string}
                    control={
                      <Checkbox
                        onChange={(e) => {
                          onChange(e);
                          handleCheck(e, checkedState, setCheckedState);
                        }}
                        checked={
                          checkedState[option[itemId] as string] ?? false
                        }
                        value={option[itemId]}
                        name={name}
                      />
                    }
                    label={option[itemLabel] as string}
                    value={value}
                  />
                );
              })}
            </FormGroup>
          </div>
        </FormControl>
      )}
    />
  );
};
export default memo(CheckField);
