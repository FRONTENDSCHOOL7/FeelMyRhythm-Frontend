import styled from 'styled-components';

// 공통 스타일 값
const styleConstants = {
  primaryColor: '#f26e22',
  textColor: '#767676',
  fontFamily: "'Spoqa Han Sans Neo', sans-serif"
};

// 베이스 컨테이너 스타일을 위한 공통 컴포넌트
const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DefaultLayout = styled(FlexCenterContainer)`
  flex-direction: column;
  min-height: 712px;
`;

export const StyledGamgulLogo = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const P = styled.p`
  color: ${styleConstants.textColor};
  text-align: center;
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 120px;
  height: 44px;
  border-radius: 44px;
  background: ${styleConstants.primaryColor};
  border: none;
  color: #ffffff;
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
