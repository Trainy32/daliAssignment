import React from 'react';

// style
import styled from 'styled-components';

// icon
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// components
import SlideBtns from './SlideBtns';

const MainBanner = () => {
  const [displayedBn, setDisplayedBn] = React.useState(0)


  const mockData = [{
    bannerTitle : '위드유 컴퍼니만의 \n 독보적인 마케팅 전략',
    bannerSub : 'AD Service',
  }, 
  {
    bannerTitle : '위드유 컴퍼니의 \n 두 번째 마케팅 전략',
    bannerSub : 'New Service',
  }]

  const dataLength = mockData.length


  return (
      <BannerWrap>
        <Title>
          <h2>
            {mockData[displayedBn].bannerTitle.split('\n').map((txt) => <> {txt} <br/> </>)}
          </h2>
          <h5> {mockData[displayedBn].bannerSub} </h5>
        </Title>

        <PhotoBox>
          <SlideBtns dataLength={dataLength} displayed={displayedBn} setDisplayed={setDisplayedBn}/>
          <BannerImage />
        </PhotoBox>
      </BannerWrap>
  );
};

export default MainBanner;

const BannerWrap = styled.div`
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