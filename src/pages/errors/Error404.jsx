import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  flex-flow: column;
`;
const ErrorTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 60px;
  font-weight: 700;
`;
const ErrorDeskription = styled.p`
  font-size: 20px;
`;
const Link = styled(NavLink)`
  color: var(--color-blue);
  font-weight: 700;
  &:hover{
    text-decoration: underline;
  }
`;

function Error404 () {
  return(
    <Container className="container">
      <ErrorTitle>Error 404</ErrorTitle>
      <ErrorDeskription>Page not found. <Link to="/">Go to main page</Link></ErrorDeskription>
    </Container>
  );
}

export default Error404;