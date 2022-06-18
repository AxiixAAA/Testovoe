import React from "react";
import FormValidation from "../formValidation/FormValidation";

import { useAppStyles } from "./style";

const FormContainer = () => {
  const { ContainerFormMUI } = useAppStyles();
  return (
    <>
      <h1>Hello</h1>
      <ContainerFormMUI>
        <p>
          For business enquiries please
          <br /> use the form below
        </p>
        <h3>*Required</h3>
        <FormValidation />
      </ContainerFormMUI>
    </>
  );
};

export default React.memo(FormContainer);
