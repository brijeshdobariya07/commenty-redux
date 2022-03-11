import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <HeaderContainer>
        <div>Comment - Redux</div>
      </HeaderContainer>
    </div>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20px;
  background-color: #1a1a1a;
  font-family: "Fredoka", sans-serif;
  font-size: 2.5em;
  padding: 5px;
  color: #f2f2f2;
  font-weight: bold;
  letter-spacing: 2px;
  width: 98%;
  margin: auto;
  border-radius: 10px;
  margin-top: 5px;
`;
