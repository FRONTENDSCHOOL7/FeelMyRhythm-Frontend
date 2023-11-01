import styled from 'styled-components';

export const YoutubeSearchLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 767px;
  width: 100vw;
  background-color: white;
  padding-top: 48px;
  padding-bottom: 48px;
  flex-direction: column;
`;
export const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;
  height: 100%;
  padding-top: 10px;
  gap: 20px;
  background-color: white;
`;

export const VideoContent = styled.p`
  display: -webkit-box;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: white;
  /* padding-right: 34px; */
`;

export const VideoSection = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  background-color: white;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  background-color: white;
`;
