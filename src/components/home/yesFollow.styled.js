import styled from 'styled-components';

const styleConstants = {
  textColor: '#767676',
  fontFamily: "'Spoqa Han Sans Neo', sans-serif"
};

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 712px;
  width: 390px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 24px;
  gap: 24px;
`;
export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 434px;
  width: 358px;
`;
export const AboutUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 358px;
  position: relative;
`;

export const StyledProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  border: 0.5px solid #dbdbdb;
  background: lightgray;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  margin-right: 12px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.p`
  height: 18px;
  color: #000;
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 18px;
`;
export const H3 = styled.h3`
  color: ${styleConstants.textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const Button = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const P = styled.p`
  color: #000;
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 54px;
  margin-top: 12px;
`;

export const Img = styled.img`
  margin-top: 16px;
  margin-left: 54px;
  height: 228px;
`;
export const IconsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 304px;
  margin-top: 12px;
  margin-left: 54px;
`;

export const StyledHeartBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const StyledMessageBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;
export const Span = styled.span`
  color: ${styleConstants.textColor};
  margin-right: 16px;
`;
export const Date = styled.p`
  color: ${styleConstants.textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  margin-left: 54px;
  margin-top: 16px;
`;
