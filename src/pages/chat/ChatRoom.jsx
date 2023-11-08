import React, { useEffect, useState } from 'react';
import Chatroom from '../../components/chat/chatroom/Chatroom';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../store/store';
import Loading from '../../../src/components/common/Loading/Loading';
import { readFollowings } from '../../apis/profile/followingsAPI';

export default function ChatRoom() {
  const { accountname } = useParams();
  const navigate = useNavigate();
  const mydata = useRecoilValue(atomMyInfo);
  const [selectedUser, setSelectedUser] = useState(null);

  const { data: followingsData, error } = useQuery({
    queryKey: [mydata?.accountname, 'followings'],
    queryFn: () => readFollowings(mydata.accountname)
  });

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (followingsData) {
      const user = followingsData.find((u) => u.accountname === accountname);
      setSelectedUser(user);
    }
  }, [followingsData, accountname]);

  if (error) {
    console.error('Error fetching followings', error);

    return <div>Failed to load followings.</div>;
  }

  if (!selectedUser) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Chatroom key={selectedUser._id} user={selectedUser} />
    </>
  );
}
