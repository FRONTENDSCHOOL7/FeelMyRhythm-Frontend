import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { youtubeSearch } from '../../apis/youtube/searchAPI';
import * as S from './YoutubeSearch.styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { atomYoutubeSearchCount, atomYoutubeSearchKeyword } from '../../store/store';

export default function YoutubeSearch() {
  const youtubeSearchCount = useRecoilValue(atomYoutubeSearchCount);
  const youtubeSearchKeyword = useRecoilValue(atomYoutubeSearchKeyword);

  const navigate = useNavigate();

  const { data: youtubeData } = useQuery({
    queryFn: () =>
      youtubeSearch(youtubeSearchKeyword).then((response) => {
        console.log(response);
        return response;
      }),
    queryKey: [youtubeSearchCount],
    refetchOnWindowFocus: false
  });

  const onNavigateVideoDetail = (videoId, title, thumbnail) => {
    console.log(videoId, title, thumbnail);
    navigate(`${videoId}`, { state: { title, thumbnail, videoId } });
  };

  return (
    <S.YoutubeSearchLayout>
      <S.VideoBox>
        {youtubeData?.items.map((data, index) => (
          <S.VideoSection
            key={index}
            onClick={() => {
              onNavigateVideoDetail(data.id.videoId, data.snippet.title, data.snippet.thumbnails.high.url);
            }}>
            <S.VideoThumbnail src={data.snippet.thumbnails.high.url} />
            <S.VideoContent>{data.snippet.title}</S.VideoContent>
          </S.VideoSection>
        ))}
      </S.VideoBox>
    </S.YoutubeSearchLayout>
  );
}
