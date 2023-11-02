import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../../apis/home/entirePosts';
import { readUserInfo } from '../../../apis/profile/myInfoAPI';
import UserProfile from '../UserProfile';
import * as S from './yesFollow.styled';
import NoFollow from './NoFollow';

export default function FollowStatus({ emojiState }) {
  const { data, error } = useQuery({ queryFn: () => showEntirePosts(), queryKey: [''] });

  const [myId, setMyId] = useState('');

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userInfo = await readUserInfo();

        if (userInfo.user._id) {
          setMyId(userInfo.user._id);
        } else {
          console.log(userInfo);
          console.log('사용자 객체 내에 _id 속성이 없습니다.');
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 동안 오류가 발생했습니다.', error);
      }
    }

    fetchUserInfo();
  }, []);

  const filteredPosts = data?.posts.filter(
    (post) => post.author.follower.includes(myId) && String(post.image).split('🈳')[0] === 'ms7-3'
  );
  if (filteredPosts.length === 0) {
    return <NoFollow />;
  } else {
    return (
      <S.DefaultLayout>
        {filteredPosts.map(
          (post, i) =>
            String(post.image).split('🈳')[0] === 'ms7-3' &&
            (emojiState === '전체' || emojiState === '선택' || String(post.image).split('🈳')[4] === emojiState) && (
              <UserProfile key={i} {...post} />
            )
        )}
      </S.DefaultLayout>
    );
  }
}
