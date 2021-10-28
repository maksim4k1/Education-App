import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoIcon from "../../../assets/LogoIcon";
import { gap } from "../../../styles/mixins";
import Button from "../Button";

const Aside = styled.aside`
  position: sticky;
  top: 0;
  min-width: 250px;
  height: 100vh;
  padding: 66px 0 42px;
  display: flex;
  flex-flow: column;
  align-items: center;
  ${gap("42px")}
  background: var(--color-white);
`;
const Navigation = styled.nav`
  display: flex;
  flex-flow: column;
  ${gap("15px")}
`;
const NavButton = styled(Button)`
  color: var(--color-black);
  font-weight: 400;
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  &:hover{
    background: var(--color-gray);
  }
  &.active{
    border: 1px solid var(--color-blue);
  }
`;
const Profile = styled.div`
  width: 185px;
  height: 130px;
  margin: auto 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  ${gap("12px")}
  font-size: 14px;
  background: var(--color-gray);
  border-radius: 6px;
`;
const UserName = styled.h6`
  font-weight: 700;
`;
const LogoutButton = styled.button`
  width: 110px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  border-radius: 6px;
  transition: all 0.3s;
  &:hover{
    color: var(--color-white);
    background: var(--color-blue);
  }
`;

function Sidebar () {
  return(
    <Aside>
      <NavLink to="/"><LogoIcon/></NavLink>
      <Navigation>
        <NavButton className="active"><NavLink to="/classroom/math">Math</NavLink></NavButton>
        <NavButton><NavLink to="/classroom/physics">Physics</NavLink></NavButton>
        <NavButton><NavLink to="/classroom/chemistry">Chemistry</NavLink></NavButton>
        <NavButton><NavLink to="/classroom/biology">Biology</NavLink></NavButton>
      </Navigation>
      <Profile>
        <p>You’ve logged as:</p>
        <UserName>admin</UserName>
        <LogoutButton>log out</LogoutButton>
      </Profile>
    </Aside>
  );
}

export default Sidebar;