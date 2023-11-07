import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../../apis/home/entirePosts';
import { readUserInfo } from '../../../apis/profile/myInfoAPI';
import UserProfile from '../UserProfile';
import * as S from './yesFollow.styled';
import NoFollow from './NoFollow';
import IFollowButNoPosts from './IFollowButNoPosts';
import Loading from '../../../components/common/Loading/Loading'; // Make sure to import your Loading component

export default function FollowStatus({ emojiState }) {
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [myId, setMyId] = useState('');
  const [followings, setFollowings] = useState([]);

  const { data, error, isFetching } = useQuery({
    queryFn: () => showEntirePosts(),
    queryKey: ['posts'],
    onSettled: () => {
      setLoading(false); // Turn off loading when query is settled
    }
  });

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userInfo = await readUserInfo();
        if (userInfo.user._id) {
          setMyId(userInfo.user._id);
          setFollowings(userInfo.user.following);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    }

    fetchUserInfo();
  }, []);

  const filteredPosts =
    data && data.posts
      ? data.posts.filter(
          (post) => post.author.follower.includes(myId) && String(post.image).split('🈳')[0] === 'ms7-3'
        )
      : [];

  const followingsWithPosts = followings.filter((following) => {
    return data && data.posts ? data.posts.some((post) => post.author._id === following._id) : false;
  });

  if (loading) {
    // Display loading animation when data is being fetched
    return <Loading />;
  }

  if (followings.length === 0) {
    return <NoFollow />;
  }

  if (filteredPosts.length === 0) {
    return <IFollowButNoPosts />;
  }

  // 나머지 경우 (filteredPosts에 조건에 맞는 게시물이 있는 경우)
  return (
    <S.DefaultLayout>
      {filteredPosts?.map(
        (post, i) =>
          String(post.image).split('🈳')[0] === 'ms7-3' &&
          (emojiState === '전체' || emojiState === '선택' || String(post.image).split('🈳')[4] === emojiState) && (
            <UserProfile
              key={i}
              author={post.author}
              content={post.content}
              image={post.image}
              createdAt={post.createdAt}
              comments={post.comments}
              heartCount={post.heartCount}
              id={post._id}
            />
          )
      )}
    </S.DefaultLayout>
  );
}
