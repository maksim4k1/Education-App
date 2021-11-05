import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const Card = styled.tr`
  width: 100%;
  height: 50px;
  padding: 0 34px;
  display: flex;
  align-items: center;
  ${gap("50px")}
  font-size: 14px;
  background: var(--color-white);
  border-radius: 6px;
`;
const Name = styled.td`
  width: 70%;
  text-align: start;
`;
const Level = styled.td`
  width: 15%;
  text-align: center;
`;
const Score = styled.td`
  width: 15%;
  text-align: center;
`;

function Student ({student}) {
  return(
    <Card>
      <Name>{student.name}</Name>
      <Level>{student.level}</Level>
      <Score>{student.score}</Score>
    </Card>
  );
}

export default Student;