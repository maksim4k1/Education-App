import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: 227px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 14px;
  font-weight: 700;
  background: var(--color-blue);
  border-radius: 6px;
  transition: all 0.3s;
  &>a{
    color: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover{
    background: var(--color-blue-hover);
  }
  &:disabled{
    background: var(--color-blue-disabled);
    &:hover{
      background: var(--color-blue-disabled);
    }
  }
`;

function Button (props) {
  return(
    <ButtonElement {...props}>
      {props.children}
    </ButtonElement>
  );
}

export default Button;