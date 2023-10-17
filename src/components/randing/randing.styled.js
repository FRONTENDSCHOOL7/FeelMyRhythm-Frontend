import styled from 'styled-components';
import kakao from '../../images/randingPage/logo_kakao.svg';
import google from '../../images/randingPage/logo_google.svg';
import facebook from '../../images/randingPage/logo_facebook.svg';

export const RandingPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #ea7f42;
`;

export const ImgBox = styled.div`
  flex: 1 auto;
`;

export const LogoImg = styled.img`
  padding-top: 180px;
  display: flex;
  margin: 0 auto;
  width: 144px;
  height: 144px;
`;

export const BottomBoxBox = styled.div`
  background-color: white;
  padding-top: 50px;
  padding-bottom: 125px;
  padding: 50px 34px 125px 34px;
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

export const KakaoBtn = styled(LoginBtn)`
  border: 1px solid #f2c94c;
  &::before {
    background-image: url(${kakao});
  }
`;

export const GoogleBtn = styled(LoginBtn)`
  border: 1px solid #767676;
  &::before {
    background-image: url(${google});
  }
`;

export const FacebookBtn = styled(LoginBtn)`
  border: 1px solid #2d9cdb;
  &::before {
    background-image: url(${facebook});
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
  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 400;

  cursor: pointer;
`;

export const PipeContent = styled(SignContent)`
  color: var(--C4C4C4, #c4c4c4);
  cursor: text;
`;
