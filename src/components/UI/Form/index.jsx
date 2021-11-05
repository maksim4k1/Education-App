import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const FormElement = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
  ${gap("17px")}
  &>h4{
    margin-bottom: 15px;
  }
  &>button{
    margin-top: 15px;
  }
`;

function Form (props) {
  return(
    <FormElement {...props}>
      {props.children}
    </FormElement>
  );
}

export default Form;