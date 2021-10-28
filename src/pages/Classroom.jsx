import React from "react";
import { Redirect, useParams } from "react-router";

function Classroom () {
  const {id} = useParams();

  return(
    <div>
      <Redirect to="/error/404" />
    </div>
  );
}

export default Classroom;