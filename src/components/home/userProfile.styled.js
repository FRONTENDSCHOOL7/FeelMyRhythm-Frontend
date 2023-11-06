import styled from 'styled-components';

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  &:hover {
    background-color: ${({ theme }) => theme.highlightColor};
  }
`;
export const AboutUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const Iframe = styled.iframe`
  width: 300px;
  height: 163px;
  border-radius: 15px;
  margin-top: 16px;
`;

export const ImgBox = styled.div`
  width: 300px;
  height: 168px;
  border-radius: 17px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Img = styled.img`
  height: 140%;
  transform: translate(-1%, -14%);
`;

export const StyledProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  margin-right: 12px;
`;

export const UserInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.p`
  height: 18px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.textColor};
`;
export const H3 = styled.h3`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const H4 = styled.h4`
  margin-top: 5px;
  color: ${({ theme }) => theme.subTextColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Button = styled.button`
  width: 18px;
  height: 18px;
  /* position: absolute; */
  /* top: 0px; */
  /* right: 0px; */
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
  cursor: pointer;
`;
export const ContentsBox = styled.div`
  margin-left: 54px;
  cursor: pointer;
`;
export const DescriptionContent = styled.p`
  color: ${({ theme }) => theme.textColor};
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
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const StyledMessageBox = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
export const NumBox = styled.div`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 12px;
  padding-right: 10px;
`;
export const Date = styled.p`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  padding-left: 54px;
  padding-top: 16px;
`;

export const DetailNavigateBtn = styled.div`
  cursor: pointer;
`;

export const VideoImgToggleBox = styled.div`
  width: auto;
  display: inline-block;
`;

export const FaceBox = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.subTextColor};
`;

export const BigIframe = styled.iframe`
  display: block;
  max-width: 767px;

  width: 77%;
  @media (max-width: 500px) {
    width: 100%;
    height: 15.5vh;
  }

  height: 21.8vh;
  border-radius: 15px;
  margin-top: 16px;
`;
