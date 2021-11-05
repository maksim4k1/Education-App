import React, { useEffect, useState } from "react";
import Form from "./UI/Form";
import FormTitle from "./UI/Form/FormTitle";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { connect } from "react-redux";
import { addNewStudentAction } from "../redux/actions/studentsActions";
import FormError from "./UI/Form/FormError";
import { closeAddNewStudentModalAction } from "../redux/actions/appActions";

function AddNewStudentModal ({classroom, newStudent, addNewStudent, closeModal}) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [formData]);
  useEffect(() => {
    if(newStudent.success){
      closeModal();
      setFormData({});
    }
  }, [newStudent.success, closeModal])

  function onSubmitHandler(event){
    event.preventDefault();
    if(!formData.name || !formData.level || !formData.score){
      setError("Заполните все поля!");
    } else{
      addNewStudent(classroom, formData);
    }
  }

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
  }

  return(
    <Modal>
      <Form onSubmit={onSubmitHandler}>
        <FormTitle>Add new student</FormTitle>
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name || ""}
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="level"
          placeholder="Level"
          value={formData.level || ""}
          onChange={onChangeHandler}
        />
        <Input
          type="number"
          name="score"
          placeholder="Average Score"
          value={formData.score || ""}
          onChange={onChangeHandler}
        />
        {
          newStudent.error || error
          ? <FormError>{newStudent.error || error}</FormError>
          : null
        }
        <Button type="submit" disabled={newStudent.loading}>{newStudent.loading ? "Loading..." : "Add"}</Button>
      </Form>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  newStudent: state.students.newStudent
});
const mapDispatchToProps = {
  addNewStudent: addNewStudentAction,
  closeModal: closeAddNewStudentModalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewStudentModal);