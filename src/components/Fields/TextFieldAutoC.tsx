import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styles from './Fields.module.scss';
export default function CountrySelect({
  name,
  label,
  control,
  options,
  variant,
  rules,
  error,
  errmsg,
  ref,
  value,
  inputValue,
  onChange,
  onInputChange
}: any) {
  return (
    <div className={styles['input_text']}>
    <Autocomplete
      id="controllable-states-demo"
      sx={{ minWidth: 500, width:'100%' }}
      value={value}
      options={options.map((opt:any) => `${opt?.codPlantel} ${opt?.name}`)}
      /* onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }} */
      onChange={onChange}
      inputValue={inputValue}
      /* onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }} */

      onInputChange={onInputChange}
      renderInput={params =>
        <TextField {...params} fullWidth label={label} variant={variant} />
      
       }
           
    />
     {error &&
        <p className={styles['input_text_error']}>
          {errmsg.message}
        </p>}
     </div>
  );
}
