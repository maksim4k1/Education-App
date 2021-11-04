import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getStudentsByIdAction } from "../redux/actions/studentsAction";

function Classroom ({students, getStudents}) {
  const {id} = useParams();
  const data = students[id];

  useEffect(() => {
    if(!data.students.length){
      getStudents(id);
    }
  }, [id, getStudents, data.students.length]);

  return(
    <div>
      {
        data.students.map(student => {
          return <div key={student.id}>{student.name}</div>
        })
      }
      {
        data.loading
        ? <div>Loading...</div>
        : null
      }
      {
        data.error
        ? <div>{data.error}</div>
        : null
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  students: state.students
});
const mapDispatchToProps = {
  getStudents: getStudentsByIdAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);