import React, { useState } from 'react';
import * as S from './ProfilePostList.styled';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { ReactComponent as IconHam } from '../../../assets/images/profile/icon-ham.svg';
import { ReactComponent as IconBento } from '../../../assets/images/profile/icon-bento.svg';
import PostItem from './PostItem';
import { readUserPost } from '../../../apis/profile/userPostAPI';
import { readAccountInfo } from '../../../apis/profile/accountInfoAPI';

export default function ProfilePlaylist() {
  const { accountname } = useParams();
  const [flag, setFlag] = useState(true);
  const [postList, setPostList] = useState([]);
  const [profile, setProfile] = useState({});

  const { acc, error } = useQuery({
    queryFn: () =>
      readAccountInfo(accountname).then((res) => {
        setProfile(res.profile);
        return res.profile;
      }),
    queryKey: [accountname]
  });

  const { data, err } = useQuery({
    queryFn: () =>
      readUserPost(accountname).then((res) => {
        setPostList(res.post);
        return res.post;
      }),
    queryKey: ['myPostList', accountname, profile]
  });

  if (!postList[0]) return <></>;
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
