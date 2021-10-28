import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 30px;
`;
const List = styled.ul`
  max-width: 550px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  &>button{
    margin: 0 auto;
  }
  grid-row-gap: 30px;
`;

function Main () {
  return(
    <main className="content container">
      <Title>Выберите свой предмет</Title>
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