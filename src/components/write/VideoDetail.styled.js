import styled from 'styled-components';

export const VideoDetailLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-top: 48px;
  padding-left: 34px;
  justify-content: center;
`;

export const VideoBox = styled.div``;

export const Video = styled.iframe`
  width: 80vw;
  height: 27%;
  padding-top: 40px;
`;

export const VideoContent = styled.p`
  padding-right: 34px;
  padding-bottom: 20px;
`;

export const ShareBtn = styled.button`
  width: 80vw;
  height: 40px;

  background-color: #f26e22;

  border-radius: 32px;

  color: #fff;

  font-size: 14px;
  font-weight: 500;
  text-align: center;

  border: none;
`;
