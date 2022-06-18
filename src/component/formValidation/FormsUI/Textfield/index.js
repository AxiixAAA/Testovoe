import { TextField } from "@mui/material";
import React from "react";
import { useField } from "formik";
import classes from "./textfield.module.css";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);
  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "standard",
  };
  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
  return (
    <div className={classes.style}>
      <TextField {...configTextfield} />
    </div>
  );
};

export default TextfieldWrapper;
