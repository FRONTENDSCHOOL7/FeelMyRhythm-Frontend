import styled, { keyframes } from 'styled-components';
import kakao from '../../assets/images/randingPage/logo_kakao.svg';
import google from '../../assets/images/randingPage/logo_google.svg';
import facebook from '../../assets/images/randingPage/logo_facebook.svg';

export const RandingPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgb(76, 89, 134);
  background: linear-gradient(180deg, rgba(76, 89, 134, 1) 21%, rgba(241, 222, 255, 1) 100%);
`;

export const ContBox = styled.div``;

export const Title = styled.h1`
  padding-top: 12px;
  font-size: 20px;
  text-align: center;
  color: white;
  font-family: 'Orbit-Regular';
`;
export const ImgBox = styled.div`
  @keyframes slideupLogo {
    0% {
      padding-top: 50px;
    }
    80% {
      padding-top: 50px;
    }
    100% {
      padding-top: 10px;
    }
  }
  flex: 1 auto;
  animation: slideupLogo 4s ease-in;
`;

export const LogoImg = styled.img`
  @keyframes popImg {
    0% {
      scale: 1;
    }
    25% {
      scale: 0.95;
    }
    50% {
      scale: 1;
    }
    75% {
      scale: 0.975;
    }
    100% {
      scale: 1;
    }
  }
  width: 90px;
  padding-top: 180px;
  display: flex;
  margin: 0 auto;
  animation: popImg 3s ease-in;
`;

export const BottomBoxBox = styled.div`
  background-color: white;
  padding: 50px 34px 88px 34px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  @keyframes slideup {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    80% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  width: 100%;
  max-width: 767px;
  animation: slideup 4s ease-in-out;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const LoginBtn = styled.button`
  border-radius: 44px;
  padding: 13px;
  width: 95%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 24px;
    height: 24px;
    left: 14px;
  }
`;

export const KakaoBtn = styled(LoginBtn)`
  border: 1px solid #f2c94c;
  &::before {
    background: url(${kakao}) no-repeat;
  }
`;

export const GoogleBtn = styled(LoginBtn)`
  border: 1px solid #767676;
  &::before {
    background: url(${google}) no-repeat;
  }
`;

export const FacebookBtn = styled(LoginBtn)`
  border: 1px solid #2d9cdb;
  &::before {
    background: url(${facebook}) no-repeat;
    left: 18px;
  }
`;

export const SignBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  gap: 12px;
`;

export const SignContent = styled.p`
  color: var(--767676, #767676);
  font-size: 15px;
  font-weight: 400;

  cursor: pointer;
`;

export const PipeContent = styled(SignContent)`
  color: var(--C4C4C4, #c4c4c4);
  cursor: text;
`;
