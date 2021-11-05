import React from "react";
import styled from "styled-components";
import Student from "./UI/Student";
import { gap } from "../styles/mixins";

const Table = styled.table`
  width: 100%;
`;
const Heads = styled.thead`
  display: flex;
  padding: 0 34px;
  margin: 0 0 15px;
  ${gap("50px")}
`;
const Head = styled.tr`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  &.name{
    width: 70%;
    text-align: start;
  }
  &.level, &.score{
    width: 15%;
    justify-content: center;
    text-align: center;
  }
`;
const Students = styled.tbody`
  display: flex;
  flex-flow: column;
  ${gap("15px")}
`;

function StudentsTable ({students}) {
  return(
    <Table>
      <Heads>
        <Head className="name"><th>Name</th></Head>
        <Head className="level"><th>Level</th></Head>
        <Head className="score"><th>Average Score</th></Head>
      </Heads>
      <Students>
        {
          students.map(student => {
            return <Student key={student.id} student={student}/>
          })
        }
      </Students>
    </Table>
  );
}

export default StudentsTable;