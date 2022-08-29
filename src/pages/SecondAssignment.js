import React from 'react';

// style
import styled from 'styled-components';

// route
import { useNavigate } from 'react-router-dom';

// components
import Wrap from '../components/Wrap';
import NavBar from '../components/NavBar';

const SecondAssignment = () => {
  const navigate = useNavigate();
  const titleRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState()
  const titleTxt = '평범한 한복데이트는 그만! 고퀄리티 한복대여 체험단 모집'

  const mockArr = Array.from({length:5}, (item, idx) => idx);
  
  const handleScroll = () => {
    if (window.scrollY > titleRef.current?.offsetTop) {
      setIsScrolled(()=>true) 
    } else if (window.scrollY < titleRef.current?.offsetTop) {
      setIsScrolled(()=>false) 
    }
  };

  React.useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll, { capture: true });
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  return (
    <Wrap>
      <NavBar isScrolled={isScrolled} titleTxt={titleTxt}/>

      <Photo />

      <PostTitle ref={titleRef}> {titleTxt} </PostTitle>

      <Status> 모집중 </Status>

      <Info>
        <dt>제공 내역</dt>
        <dd>한국 개량한복 3SET</dd>
      </Info>

      <Info>
        <dt>지원인원</dt>
        <dd>83명</dd>
      </Info>

      <Info>
        <dt>모집인원</dt>
        <dd>50명</dd>
      </Info>

      <Info>
        <dt>신청기간 </dt>
        <dd>12.01~12.15</dd>
      </Info>

      <MoveBtn onClick={() => navigate('/')}>1번 과제 페이지</MoveBtn>

      <Warning>
        {mockArr.map((i) => (
          <p key={i}>
            화려한 색감과 수려한 선이 아름다운 한복을 대여해보세요. 전통이 깃든
            우리 한복을 입으면 마치 조선시대로 시간여행을 떠난 듯 특별한 기분을
            선사합니다. 얼마 전까지만 해도 한복은 명절이나 특별한 일이 있을 때만
            입는 옷이었지만, 최근 들어 한복 대여 서비스가 널리 인기를 끌면서
            젊은 층에게도 많은 사랑을 받고 있어요. 클룩에서 한복남 한복 대여
            서비스를 예약하고 500여 벌 이상의 다양한 한복 중 원하는 디자인을
            선택해보세요. 테마 한복도 마련되어 있으니 조금 색다른 옷을 원한다면
            테마 한복을 선택하는 것은 어떨까요? 연인과 함께라면 결혼식 한복을
            대여해 입는 것도 좋은 추억이 될 거예요. 땋은 머리에 포인트가 될 댕기
            등 액세서리를 추가로 대여하면 더욱 완벽한 차림새가 연출됩니다.
            영화나 TV 프로그램을 테마로 한 셀프 스튜디오에서 마음껏 사진을
            찍으며 멋진 추억을 만드세요. 고운 한복을 차려입고 아름다운 풍경 속을
            거닐어보세요. 고즈넉한 고성 앞에서 기념사진을 남겨보는 것은
            어떨까요? 다양하게 마련된 헤어 액세서리를 함께 착용해보세요.
            추가요금을 내고 더 다양한 헤어 액세서리, 가방, 신발을 이용해보세요.
            더 자세한 정보는 를 참조해주세요. 창경궁, 창덕궁, 인사동 등 근처의
            유적지도 함께 방문해보세요.
          </p>
        ))}
      </Warning>
    </Wrap>
  );
};

export default SecondAssignment;

const Photo = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 52%;
  background: url('https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_896/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/m8n6kvnmha5fto06wxed/[%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98]%ED%95%9C%EB%B3%B5%EB%82%A8%ED%95%9C%EB%B3%B5%EC%B2%B4%ED%97%98%ED%97%A4%EC%96%B4%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81(%EA%B2%BD%EB%B3%B5%EA%B6%81%EC%A7%80%EC%A0%90).webp
');
  background-size: cover;
  background-position: center;
`;

const PostTitle = styled.h1`
  font-size: 21px;
  line-height:144%;
  margin: 20px;
`;

const Status = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 30px 20px;
  color: #6a30f9;
`;

const Info = styled.dl`
  margin: 20px;
  display: flex;

  dd {
    margin-left: 40px;
  }
`;

const MoveBtn = styled.button`
  width: 80%;
  max-width: 500px;
  margin: 20px;
  padding: 20px;
  background: #9573ff;
  font-size: 18px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Warning = styled.div`
  margin: 20px;
  padding: 20px;
  font-size: 16px;
  line-height: 144%;
  background: #fef0f0;
`;
