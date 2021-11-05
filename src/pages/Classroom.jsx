import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import AddNewStudentModal from "../components/AddNewStudentModal";
import StudentsTable from "../components/StudentsTable";
import Button from "../components/UI/Button";
import { openAddNewStudentModalAction } from "../redux/actions/appActions";
import { getStudentsByIdAction } from "../redux/actions/studentsActions";

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;
const Navigation = styled.nav`
  margin: 0 0 76px;
  display: flex;
  align-items: top;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-transform: capitalize;
`;
const Loader = styled.div`
  margin: 152px 0 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
const Error = styled.div`
  margin: 152px 0 0;
  color: var(--color-red);
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  &>button{
    font-weight: 700;
    &:hover{
      text-decoration: underline;
    }
  }
`;

function Classroom ({students, getStudents, openModal}) {
  const {id} = useParams();
  const data = students[id];

  useEffect(() => {
    if(!data.students.length){
      getStudents(id);
    }
  }, [id, getStudents, data.students.length]);

  function reloadList(){
    getStudents(id);
  }

  return(
    <Container className="container">
      <Navigation>
        <Title>{id}</Title>
        <Button onClick={openModal} disabled={data.loading || data.error}>Add new student</Button>
        <AddNewStudentModal/>
      </Navigation>
      {
        data.loading
        ? <Loader>Student list is loading...</Loader>
        : data.error
        ? <Error>{data.error} <button onClick={reloadList}>Try again</button></Error>
        : <StudentsTable students={data.students} />
      }
    </Container>
  );
}

const mapStateToProps = (state) => ({
  students: state.students
});
const mapDispatchToProps = {
  getStudents: getStudentsByIdAction,
  openModal: openAddNewStudentModalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);