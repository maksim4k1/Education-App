import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { closeAddNewStudentModalAction } from "../../../redux/actions/appActions";

const ModalContainer = styled.div`
  padding: 100px 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-bg-opacity);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
`;
const ModalElement = styled.div`
  max-width: 674px;
  width: 100%;
  padding: 91px 87px 87px;
  background: var(--color-white);
  border-radius: 6px;
`;

function Modal ({children, isOpenModal, closeModal}) {
  function closeModalHandler(event){
    if(event.target === event.currentTarget){
      closeModal();
    }
  }
  
  return(
    <ModalContainer onClick={closeModalHandler} style={isOpenModal ? {opacity: 1, visibility: "visible"} : null}>
      <ModalElement>
        {children}
      </ModalElement>
    </ModalContainer>
  );
}

const mapStateToProps = (state) => ({
  isOpenModal: state.app.openAddNewStudentModal
});
const mapDispatchToProps = {
  closeModal: closeAddNewStudentModalAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);