import React from "react";

// style
import styled from 'styled-components';

// route
import { useNavigate } from 'react-router-dom';

// icon
import { HiOutlineArrowLeft } from 'react-icons/hi';
import logo from "../img/logo.png";


const NavBar = (props) => {
  const navigate = useNavigate();
  const isScrolled = props.isScrolled
  const titleTxt = props.titleTxt

  return (
    <NavWrap>
    {
      isScrolled ? 
      <Content> 
        <Icon onClick={() => navigate('/')}> <HiOutlineArrowLeft/> </Icon>  
        <p> {titleTxt} </p> 
      </Content> 
      : 
      <Icon onClick={() => navigate('/')}> <img src={logo} alt="" /> </Icon>
    }
  </NavWrap>
  )
}

export default NavBar

const NavWrap = styled.div`
  width: 100%;
  height: 64px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  position:fixed;
  top:0;
  left:0;
`;

const Icon = styled.div`
  width: 56px;
  height: 64px;
  font-size: 24px;
  cursor:pointer;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    height: 30px;
  }
`
const Content = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  p {
    width: 50%;
    word-break: keep-all;
    line-height: 130%;
  }

`