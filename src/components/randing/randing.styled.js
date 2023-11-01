import styled, { keyframes } from 'styled-components';

export const RandingPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  background: rgb(76, 89, 134);
  background: linear-gradient(180deg, rgba(76, 89, 134, 1) 21%, rgba(241, 222, 255, 1) 100%);
`;

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
      bottom: -200px;
    }
    80% {
      bottom: -200px;
    }
    100% {
      bottom: 0px;
    }
  }
  animation: slideup 4s ease-in-out;
  width: 100%;
  max-width: 767px;
  position: absolute;
  bottom: 0px;
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
  width: 322px;
  background-color: #fff;
  display: flex;
  align-items: center;
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
export const SignBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  gap: 12px;
`;

export const SignContent = styled.p`
  color: var(--767676, #767676);
  font-family: 'Orbit-Regular';
  font-size: 15px;
  font-weight: 400;

  cursor: pointer;
`;

export const PipeContent = styled(SignContent)`
  color: var(--C4C4C4, #c4c4c4);
  cursor: text;
`;
