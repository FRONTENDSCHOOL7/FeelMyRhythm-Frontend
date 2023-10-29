import React, { useState } from 'react';
import * as S from './chatlists.styled';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';
import ChatItem from './ChatItem';
import { readFollowings } from '../../../apis/profile/followingsAPI';

export default function ChatLists() {
  const mydata = useRecoilValue(atomMyInfo);
  const [followings, setFollowings] = useState([]);
  const { data, err } = useQuery({
    queryFn: () =>
      readFollowings(mydata.accountname).then((res) => {
        setFollowings(res);
        return res;
      }),
    queryKey: [mydata.accountname]
  });

  return (
    <S.ChatListLayout>
      {followings.map((user) => (
        <ChatItem key={user._id} user={user} />
      ))}
    </S.ChatListLayout>
  );
}
