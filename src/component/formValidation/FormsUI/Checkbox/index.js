import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React from "react";
import classes from "./checkbox.module.css";
import { useField, useFormikContext } from "formik";

const CheckboxWrapper = ({ name, label, legend, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };
  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }
  return (
    <>
      <FormControl {...configFormControl}>
        <div className={classes.style}>
          <div>
            <FormGroup>
              <FormControlLabel control={<Checkbox {...configCheckbox} />} />
            </FormGroup>
          </div>
          <div>
            <FormLabel component="legend">{legend}</FormLabel>
          </div>
        </div>
      </FormControl>
    </>
  );
};

export default CheckboxWrapper;
