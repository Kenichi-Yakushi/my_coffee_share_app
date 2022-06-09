import * as React from "react";
import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

const CoffeeIndex = (): JSX.Element | null => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid>
          <h1>CoffeeIndex</h1>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register("firstName")} />
          <br />
          <label>Gender Selection</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <br />
          <button type="submit">送信</button>
        </form>
      </ThemeProvider>
    </>
  );
};

export default CoffeeIndex;
