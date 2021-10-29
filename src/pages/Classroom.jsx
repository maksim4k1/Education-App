import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getStudentsByIdAction } from "../redux/actions/studentsActions";

function Classroom ({students, getStudents}) {
  const {id} = useParams();

  useEffect(() => {
    if(!students[id].length){
      getStudents(id);
    }
  }, [students, getStudents, id]);

  return(
    <div>
      {
        students[id].map(item => {
          return <div>{item.name}</div>
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  students: state.students,
});
const mapDispatchToProps = {
  getStudents: getStudentsByIdAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);