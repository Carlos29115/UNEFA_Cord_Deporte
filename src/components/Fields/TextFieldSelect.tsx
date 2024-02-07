import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { memo, useState } from "react";
import { Controller } from "react-hook-form";
import { ISelectFields } from "types";
import styles from "./Fields.module.scss";

const TextFieldSelect: React.FC<ISelectFields> = ({
  name = "",
  control,
  variant = "standard",
  label = "label",
  options = [],
  defaultValue = "",
  itemId = "id",
  itemLabel = "name",
  disabled = false,
  error = false,
  rules = {},
  errmsg = "",
  handleChange = () => {
    return null;
  },
  readOnly = false,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, ref, value } }) => (
          <FormControl fullWidth>
            <InputLabel id="Label-name">{label}</InputLabel>
            <Select
              labelId={`${label}-id`}
              label={label}
              id={`${name}_id`}
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={(e) => {
                onChange(e);
                handleChange(e, name);
              }}
              name={name}
              value={value}
              variant={variant}
              inputProps={{ readOnly }}
              style={{ width: "100%" }}
              error={error ? true : false}
              disabled={disabled}
              fullWidth
              inputRef={ref}
            >
              {options.map((e: Record<string, unknown>, index: number) => {
                return (
                  <MenuItem value={e[itemId] as string} key={index}>
                    {`${e[itemLabel]}`}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      />
      {error && <p className={styles["input_text_error"]}>{errmsg.message}</p>}
    </>
  );
};

export type TSelectOptions = {
  id: string;
  name: string;
};
export default memo(TextFieldSelect);
