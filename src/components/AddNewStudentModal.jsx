import React, { useState } from "react";
import Form from "./UI/Form";
import FormTitle from "./UI/Form/FormTitle";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

function AddNewStudentModal () {
  const [formData, setFormData] = useState({});

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
  }

  return(
    <Modal>
      <Form>
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
          type="text"
          name="score"
          placeholder="Average Score"
          value={formData.score || ""}
          onChange={onChangeHandler}
        />
        <Button>Add</Button>
      </Form>
    </Modal>
  );
}

export default AddNewStudentModal;