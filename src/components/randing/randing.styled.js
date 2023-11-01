import styled from 'styled-components';

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
  padding-top: 10px;
  font-size: 20px;
  text-align: center;
  color: white;
  font-family: 'Orbit-Regular';
`;
export const ImgBox = styled.div`
  flex: 1 auto;
`;

export const LogoImg = styled.img`
  width: 90px;
  padding-top: 180px;
  display: flex;
  margin: 0 auto;
`;

export const BottomBoxBox = styled.div`
  background-color: white;
  padding: 50px 34px 88px 34px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
  font-size: 12px;
  font-weight: 400;

  cursor: pointer;
`;

export const PipeContent = styled(SignContent)`
  color: var(--C4C4C4, #c4c4c4);
  cursor: text;
`;
