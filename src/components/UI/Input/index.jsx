import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  width: 100%;
  height: 42px;
  padding: 13px 19px;
  font-size: 14px;
  border: 1px solid var(--color-border-input);
  border-radius: 6px;
  &:placeholder{
    color: var(--color-border-input);
  }
`;

function Input (props) {
  return(
    <InputElement {...props} />
  );
}

export default Input;