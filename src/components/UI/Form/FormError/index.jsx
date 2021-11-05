import React from "react";
import styled from "styled-components";

const Error = styled.div`
  margin: 1px 0 -13px;
  color: var(--color-red);
  font-size: 14px;
  font-weight: 700;
`;

function FormError ({children}) {
  return(
    <Error>
      {children}
    </Error>
  );
}

export default FormError;