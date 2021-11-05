import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/UI/Button";
import Form from "../components/UI/Form";
import FormError from "../components/UI/Form/FormError";
import FormTitle from "../components/UI/Form/FormTitle";
import Input from "../components/UI/Input";
import { loginAction } from "../redux/actions/authActions";

const LoginContainer = styled.div`
  padding: 100px 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginContent = styled.div`
  max-width: 674px;
  width: 100%;
  padding: 83px 87px 101px;
  background: var(--color-white);
  border-radius: 6px;
`;

function Login ({auth, login}) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  
  useEffect(() => {
    setError("");
  }, [formData]);

  function onChangeHandler(event){
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value
    }));
  }

  function onSubmitHandler(event){
    event.preventDefault();
    if(!formData.username || !formData.password){
      setError("Заполните все поля");
    } else{
      login(formData);
    }
  }

  return(
    <LoginContainer>
      <LoginContent>
        <Form onSubmit={onSubmitHandler}>
          <FormTitle>Login</FormTitle>
          <Input
            type="text"
            name="username"
            placeholder="Username *"
            value={formData.username || ""}
            onChange={onChangeHandler}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password *"
            value={formData.password || ""}
            onChange={onChangeHandler}
          />
          {
            auth.error || error
            ? <FormError>{auth.error || error}</FormError>
            : null
          }
          <Button type="submit" disabled={auth.loading}>Log in</Button>
        </Form>
      </LoginContent>
    </LoginContainer>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = {
  login: loginAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);