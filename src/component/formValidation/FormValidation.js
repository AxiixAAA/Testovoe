import React from "react";
import { Formik, Form } from "formik";
import { Box } from "@mui/system";
import * as Yup from "yup";
import Textfield from "./FormsUI/Textfield";
import Checkbox from "./FormsUI/Checkbox";
import Button from "./FormsUI/Button";

const INITIAL_FORM_STATE = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  termsOfService: false,
};
const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().integer().typeError("Please enter a valid phone number"),
  message: Yup.string().required("Required"),
  termsOfService: Yup.boolean()
    .oneOf([true], "The rerms and conditions must be accepted")
    .required("The rerms and conditions must be accepted"),
});
const FormValidation = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, actions) => {
          console.log(values);

          actions.setSubmitting(false);
          actions.resetForm({
            values: {
              name: "",
              company: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
              termsOfService: false,
            },
          });
        }}
      >
        <Form>
          <Textfield name="name" label="Name*" autoComplete="nope" />
          <Textfield name="company" label="Сompany*" autoComplete="nope" />
          <Textfield name="email" label="E-mail*" autoComplete="new-email" />
          <Textfield name="phone" label="Phone" />
          <Textfield name="subject" label="Subject" />
          <Textfield
            name="message"
            label="Message*"
            multiline={true}
            maxRows={2}
          />
          <Checkbox
            name="termsOfService"
            legend="I accept Terms and Privacy Policy"
            label="I agree"
          />
          <Button>Send</Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default FormValidation;
