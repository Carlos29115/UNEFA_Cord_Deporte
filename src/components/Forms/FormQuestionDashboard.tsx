// import { TextFieldSelect } from "components/Fields";
// import { RULES } from "constants";
import React from "react";
import { TextField, CustomButton, TextFieldSelect } from "components/index";
// function FormQuestionDashboard({type, sm, xs, name, label, rules, options} : any) {
//   const tipo = 1;
//   const tipoA = 1;
//   const tipoB = 2;
  // switch (tipo as any) {
  //   case tipoA:
  //     return (
  //       <Grid item xs={xs} sm={sm}>
  //         <TextFieldSelect
  //           name={name}
  //           label={label}
  //           control={control}
  //           variant="standard"
  //           rules={(RULES as any)[rules]}
  //           options={(optionsSelect as any)[options]}
  //         />
  //       </Grid>
  //     );
  //   case tipoB:
  //     return console.log("holi");
  // }
// }

// export default FormQuestionDashboard;

import { Grid } from "@mui/material";
import { useFormHook } from "hooks/useFormHook";



type TFormQuestion = {
  xs: number,
  sm: number,
  name: string,
  label: string,
  rules: any,
  optionsSelect: string[],
  options:object,
}

const FormQuestionDashboard = ({xs, sm, name, label, rules, optionsSelect, options}: TFormQuestion) => {
  
  // const { data, isNewRecord } = rowData;
  // const { control, errors, handleSubmit , getValues, reset} = useFormHook(data);
  // switch (tipo as any) {
  //   case tipoA:
  //     return (
  //       <Grid item xs={xs} sm={sm}>
  //         <TextFieldSelect
  //           name={name}
  //           label={label}
  //           control={control}
  //           variant="standard"
  //           rules={(RULES as any)[rules]}
  //           options={(optionsSelect as any)[options]}
  //         />
  //       </Grid>
  //     );
  //   case tipoB:
  //     return console.log("holi");
  // }
  <div></div>
}

export default FormQuestionDashboard