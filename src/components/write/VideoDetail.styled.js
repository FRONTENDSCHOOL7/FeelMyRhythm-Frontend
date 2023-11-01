import styled from 'styled-components';

export const VideoDetailLayout = styled.div`
  display: flex;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  padding-top: 48px;

  justify-content: center;
  background-color: white;
`;

export const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Video = styled.iframe`
  max-width: 707px;
  width: 90%;
  height: 27%;
  padding-top: 40px;
`;

export const VideoContent = styled.p`
  max-width: 707px;
  width: 90%;
  padding-bottom: 20px;
`;

export const ShareBtn = styled.button`
  max-width: 707px;
  width: 90%;
  height: 40px;

  background-color: #f26e22;

  border-radius: 32px;

  color: #fff;

  font-size: 14px;
  font-weight: 500;
  text-align: center;

  border: none;
`;
