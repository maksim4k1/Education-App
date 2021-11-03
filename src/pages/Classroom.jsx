import React from "react";
import { useParams } from "react-router";

function Classroom () {
  const {id} = useParams();

  return(
    <div>
      {id}
    </div>
  );
}

export default Classroom;