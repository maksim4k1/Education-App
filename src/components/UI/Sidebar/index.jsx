import React from "react";
import styled from "styled-components";
import LogoIcon from "../../../assets/LogoIcon";
import { gap } from "../../../styles/mixins";
import Button from "../Button";

const Aside = styled.aside`
  width: 250px;
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
`;

function Sidebar () {
  return(
    <Aside>
      <LogoIcon/>
      <Navigation>
        <NavButton className="active">Math</NavButton>
        <NavButton>Physics</NavButton>
        <NavButton>Chemistry</NavButton>
        <NavButton>Biology</NavButton>
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