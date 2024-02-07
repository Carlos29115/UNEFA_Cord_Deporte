import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
// import styles from "assets/styles/FormFields.scss";
import React, { memo, useState } from "react";
import { Controller } from "react-hook-form";
import { IFormFields } from "types/index";
import styles from "./Fields.module.scss";
const FormField: React.FC<IFormFields> = ({
  name = "",
  control,
  rules = {},
  handleChange = () => null,
  handleBlur = () => null,
  variant = "outlined",
  label = "",
  error = false,
  multiline = false,
  readOnly = false,
  type = "",
  disabled = false,
  focused = false,
  labelProps = undefined,
  autoFocus = false,
  errmsg = { message: "" },

  mask = false,
}) => {
  const [showPass, setShowPass] = useState<boolean>(true);

  const handleClickShowPassword = () => {
    setShowPass((prevState) => !prevState);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const iconPassword = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          className="input_button"
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPass ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <div className={styles["input_text"]}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextField
            name={name}
            variant={variant}
            focused={focused}
            id={`${name}_id`}
            label={label}
            type={showPass ? type : "text"}
            value={value}
            error={error && true}
            onChange={(e) => {
              handleChange(e);
              onChange(e);
            }}
            onBlur={() => {
              handleBlur();
              onBlur();
            }}
            fullWidth
            multiline={multiline}
            rows={4}
            inputProps={{ readOnly: readOnly, autoFocus, min: 0 }}
            InputLabelProps={labelProps}
            disabled={disabled}
            InputProps={type !== "password" ? {} : iconPassword}
          />
        )}
      />
      {error && <p className={styles["input_text_error"]}>{errmsg.message}</p>}
    </div>
  );
};

export default memo(FormField);
