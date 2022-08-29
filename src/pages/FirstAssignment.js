import React from 'react';

// style
import styled from 'styled-components';

// icon
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// route
import { useNavigate } from 'react-router-dom';

// components
import Wrap from '../components/Wrap';

const FirstAssignment = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Intro>
        With <span>withyou company</span> <br /> Will be better.
      </Intro>

      <MainBanner>
        <Title>
          <h2>
            위드유 컴퍼니만의 <br /> 독보적인 마케팅 전략
          </h2>
          <h5> AD Service </h5>
        </Title>

        <PhotoBox>
          <SlideBtns>
            <BsChevronLeft />
            <BsChevronRight />
          </SlideBtns>
          <BannerImage />
        </PhotoBox>
      </MainBanner>

    <MoveBtn onClick={()=>navigate('/2')}>
      2번 과제 페이지
    </MoveBtn>

    </Wrap>
  );
};

export default FirstAssignment;

const Intro = styled.h1`
  box-sizing: border-box;
  width: 100%;
  font-size: 3em;
  font-weight: 700;
  line-height: 133%;

  margin: 11vh 16.67vw;

  span {
    color: #6a30f9;
  }

  @media screen and (max-width: 720px) {
    font-size: 2.7em;
    margin: 10vh 8vw;
  }
`;

const MainBanner = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: #9573ff;
  display: flex;


  @media screen and (max-width: 720px) {
    height: 30vh;
  }
`;

const Title = styled.div`
  color: #fff;
  width: 30%;
  padding: 7% 3% 3% 18%;

  h2 {
    font-size: 2.5em;
    font-weight: 700;
    line-height: 140%;
    word-break: keep-all;
  }

  h5 {
    margin-top: 0.75em;
    font-weight: 700;
    font-size: 1.125em;
    line-height: 144%;
  }

  @media screen and (max-width: 720px) {
    font-size: 1em;
    width: 70%;
    padding: 12% 5.33%;
  }
`;

const PhotoBox = styled.div`
  width: 32.81%;
  min-width: 480px;
  height: 100%;
  margin-top: -6%;
  margin-right: 10%;


  @media screen and (max-width: 720px) {
    position: absolute;
    margin: 0;
    right: 5.3%;
    top: 50%;

    width: 57%;
    min-width: 100px;
    height: 82%;
  } 
`;

const BannerImage = styled.div`
  height: 92%;
  background-color: #ffe600;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 720px) {
    height: 80%;
  }
`;

const SlideBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;

  font-size: 2em;
  padding-bottom: 3%;

  cursor: pointer;

  @media screen and (max-width: 720px) {
    padding-bottom: 14%;
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