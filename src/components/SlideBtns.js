import React from 'react';

// style
import styled from 'styled-components';

// icon
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// components

const SlideBtns = (props) => {
  const dataLength = props.dataLength;
  const displayed = props.displayed;
  const setDisplayed = props.setDisplayed;

  const moveSlide = (direction) => {
    if (direction === 'left' && displayed > 0 ) {
      setDisplayed(() => displayed-1 )
    } else if (direction ==='right' && displayed < dataLength-1) {
      setDisplayed(() => displayed+1 )
    }
  }

  return (
    <BtnWrap dataLength={dataLength} displayed={displayed}>
      <BsChevronLeft id='left' onClick={()=> moveSlide('left')}/>
      <BsChevronRight id='right' onClick={()=> moveSlide('right')}/>
    </BtnWrap>
  );
};

export default SlideBtns;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;

  font-size: 2em;
  padding-bottom: 3%;

  cursor: pointer;

  #left {
    color: ${(props) => props.displayed > 0 ? '#000' : '#CCC' }
  }

  #right {
    color: ${(props) => props.displayed < props.dataLength-1 ? '#000' : '#CCC' }
  }

  @media screen and (max-width: 720px) {
    color: #fff;
    padding-bottom: 14%;
  }
`;
