import styled from 'styled-components';

export const YoutubeSearchLayout = styled.div`
  display: flex;
  max-width: 390px;
  padding-top: 48px;
  flex-direction: column;
`;
export const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 34px;
  padding-top: 10px;
  gap: 20px;
`;

export const VideoContent = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 34px;
`;

export const VideoSection = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

export const VideoThumbnail = styled.img`
  width: 80%;
`;
