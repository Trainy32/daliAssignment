import React from 'react';

// style
import styled from 'styled-components';

// route
import { useNavigate } from 'react-router-dom';

// components
import Wrap from '../components/Wrap';
import MainBanner from '../components/MainBanner';

const FirstAssignment = () => {
  const navigate = useNavigate(); 

  return (
    <Wrap>
      <Intro>
        With <span>withyou company</span> <br /> Will be better.
      </Intro>

      <MainBanner/>

    <MoveBtn onClick={()=>navigate('/2')}>
      2번 과제 페이지
    </MoveBtn>

    </Wrap>
  );
};

export default FirstAssignment;

const Intro = styled.h1`
  font-size: 3em;
  font-weight: 700;
  line-height: 133%;

  margin: 11vh 16.67%;

  span {
    color: #6a30f9;
  }

  @media screen and (max-width: 720px) {
    font-size: 2.7em;
    margin: 10vh 8%;
  }
`;

const MoveBtn = styled.button`
  margin-left: 16.67vw;
  margin-top: 3vh;
  outline: none;
  border: none;
  background-color: #ffe600;
  padding: 1em 3em;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 1.2em;
  cursor: pointer;


  @media screen and (max-width: 720px) {
    margin-top: 20vh;
    margin-left: 8vw;
  }
`