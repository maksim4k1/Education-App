import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import Student from "../components/UI/Student";
import { openAddNewStudentModalAction } from "../redux/actions/appActions";
import { getStudentsByIdAction } from "../redux/actions/studentsActions";
import { gap } from "../styles/mixins";

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
        <Modal>

        </Modal>
      </Navigation>
      {
        data.loading
        ? <Loader>Student list is loading...</Loader>
        : data.error
        ? <Error>{data.error} <button onClick={reloadList}>Try again</button></Error>
        : <Table>
          <Heads>
            <Head className="name"><th>Name</th></Head>
            <Head className="level"><th>Level</th></Head>
            <Head className="score"><th>Average Score</th></Head>
          </Heads>
          <Students>
            {
              data.students.map(student => {
                return <Student key={student.id} student={student}/>
              })
            }
          </Students>
        </Table>
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