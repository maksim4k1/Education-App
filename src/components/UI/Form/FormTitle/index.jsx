import React from "react";
import styled from "styled-components";

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
`;

function FormTitle ({children}) {
  return(
    <Title>
      {children}
    </Title>
  );
}

export default FormTitle;