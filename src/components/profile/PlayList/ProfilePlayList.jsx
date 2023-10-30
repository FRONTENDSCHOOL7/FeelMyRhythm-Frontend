import React, { useState } from 'react';
import * as S from './ProfilePlayList.styled';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import PlayItem from './PlayItem';
import { readProductList } from '../../../apis/profile/productListAPI';

export default function ProfilePlaylist() {
  const { accountname } = useParams();
  const [playList, setPlayList] = useState([]);
  const { data, err } = useQuery({
    queryFn: () =>
      readProductList(accountname).then((res) => {
        setPlayList(res.product);
        return res;
      }),
    queryKey: [accountname]
  });

  return (
    <S.ProfilePlayListLayout>
      <S.TitleContent>좋아하는 글</S.TitleContent>
      <S.PLContainerBox>
        {playList.map((v, i) => (
          <PlayItem
            key={i}
            img={String(v.itemName).split('🈳')[3]}
            title={String(v.itemName).split('🈳')[2]}
            postId={v.id}
            userId={v.itemImage}
          />
        ))}
      </S.PLContainerBox>
    </S.ProfilePlayListLayout>
  );
}
