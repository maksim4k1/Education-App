import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";

const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  margin: 0 0 30px;
`;
const List = styled.ul`
  max-width: 550px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
`;

function Main () {
  return(
    <main className="content container">
      <Title>Change classroom</Title>
      <List>
        <Button><NavLink to="/classroom/math">Math</NavLink></Button>
        <Button><NavLink to="/classroom/physics">Physics</NavLink></Button>
        <Button><NavLink to="/classroom/chemistry">Chemistry</NavLink></Button>
        <Button><NavLink to="/classroom/biology">Biology</NavLink></Button>
      </List>
    </main>
  );
}

export default Main;