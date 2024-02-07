import { FormControlLabel, Switch } from "@mui/material";
import React, { memo } from "react";
import { Controller } from "react-hook-form";
import { ISwitchFields } from "types";

const SwitchField: React.FC<ISwitchFields> = ({
  name = "",
  control,
  defaultValue = "",
  rules = {},
  handleChecked,
  checked = false,
  label = "label",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={(e) => {
                handleChecked(e);
                onChange(e);
              }}
              name={name}
            />
          }
          sx={{ flexDirection: "column-reverse" }}
          label={label}
          value={value}
        />
      )}
    />
  );
};
export default memo(SwitchField);
