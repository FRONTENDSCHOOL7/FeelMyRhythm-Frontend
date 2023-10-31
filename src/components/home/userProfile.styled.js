import styled from 'styled-components';

const styleConstants = {
  textColor: '#767676',
  fontFamily: "'Spoqa Han Sans Neo', sans-serif"
};
export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 434px; */
  /* width: 358px; */
  width: 100vw;
  padding: 16px 20px;
`;
export const AboutUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 358px; */
  position: relative;
  cursor: pointer;
`;

export const Iframe = styled.iframe`
  width: 310px;
  height: 220px;
  margin-top: 16px;
`;

export const Img = styled.img`
  margin-top: 16px;
  width: 310px;
  height: 220px;
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
  margin-bottom: 2px;
`;
export const H3 = styled.h3`
  color: ${styleConstants.textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const H4 = styled.h4`
  color: ${styleConstants.textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
export const ContentsBox = styled.div`
  margin-left: 54px;
  cursor: pointer;
`;
export const DescriptionContent = styled.p`
  color: #000;
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconsBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 12px;
  padding-left: 54px;
  align-items: center;
  gap: 6px;
`;

export const StyledHeartBox = styled.div`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export const StyledMessageBox = styled.div`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
export const NumBox = styled.div`
  color: ${styleConstants.textColor};
  font-size: 12px;
  padding-right: 10px;
`;
export const Date = styled.p`
  color: ${styleConstants.textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  padding-left: 54px;
  padding-top: 16px;
`;
