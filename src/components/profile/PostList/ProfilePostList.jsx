import React, { useState } from 'react';
import * as S from './ProfilePostList.styled';
import { ReactComponent as IconHam } from '../../../assets/images/profile/icon-ham.svg';
import { ReactComponent as IconBento } from '../../../assets/images/profile/icon-bento.svg';
import PostItem from './PostItem';
import { readUserPost } from '../../../apis/profile/userPostAPI';
import { useQuery } from '@tanstack/react-query';

export default function ProfilePlaylist({ profile }) {
  const [flag, setFlag] = useState(true);
  const [postList, setPostList] = useState([]);

  const { data, err } = useQuery({
    queryKey: [profile.accountname],
    queryFn: () =>
      readUserPost(profile.accountname).then((res) => {
        setPostList(res?.post);
        return res.post;
      })
  });
  return (
    <S.ProfilePostListLayout>
      <S.PostListHeader>
        <S.HamButton value={flag} onClick={() => setFlag(true)} $flag={flag}>
          <IconHam />
        </S.HamButton>
        <S.BentoButton value={flag} onClick={() => setFlag(false)} $flag={flag}>
          <IconBento />
        </S.BentoButton>
      </S.PostListHeader>
      <S.PostListBox $flag={flag}>
        {postList.map((v, i) => (
          <PostItem key={i} flag={flag} post={v} />
        ))}
      </S.PostListBox>
    </S.ProfilePostListLayout>
  );
}
