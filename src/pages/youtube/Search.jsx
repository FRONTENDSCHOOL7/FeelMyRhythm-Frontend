import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { youtubeSearch } from '../../apis/youtube/searchAPI';

export default function Search() {
  const { data: youtubeData } = useQuery({
    queryFn: () =>
      youtubeSearch('아이브').then((response) => {
        console.log(response);
        console.log(response.items);
        return response;
      }),
    queryKey: ['youtube'],
    refetchOnWindowFocus: false
  });

  return (
    <>
      <div>
        {youtubeData?.items.map((data, index) => (
          <>
            {/* <h1 key={index}>{data.snippet.title}</h1>
            <img src={data.snippet.thumbnails.high.url} /> */}
          </>
        ))}
      </div>
    </>
  );
}
