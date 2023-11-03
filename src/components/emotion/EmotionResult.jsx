import React, { useEffect, useState } from 'react';
import UserProfile from '../home/UserProfile';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../apis/home/entirePosts';
import * as S from './EmotionResult.styled';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EmotionResult({ SetResult }) {
  const navigate = useNavigate();
  const [postList, setPostList] = useState('');
  const [filteredPostList, setfilteredPostList] = useState([]);
  const [randomPost, setRandomPost] = useState('');
  const { state } = useLocation();
  const [count, setCount] = useState(0);

  // console.log(postList);
  const { data, error } = useQuery({
    queryFn: () =>
      showEntirePosts().then((res) => {
        setPostList(res.posts);
        return res;
      }),
    queryKey: ['emotionPost'],
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    if (postList) {
      switch (state) {
        case '행복해': {
          const filter = postList.filter((data) => String(data.image).split('🈳')[4] === 'smile');

          setfilteredPostList(filter);
          setRandomPost(filter[Math.trunc(Math.random() * filter.length)]);
          break;
        }
        case '슬퍼': {
          const filter = postList.filter((data) => String(data.image).split('🈳')[4] === 'sad');
          setfilteredPostList(filter);
          setRandomPost(filter[Math.trunc(Math.random() * filter.length)]);
          break;
        }
        case '화나': {
          const filter = postList.filter((data) => String(data.image).split('🈳')[4] === 'angry');
          setfilteredPostList(filter);
          setRandomPost(filter[Math.trunc(Math.random() * filter.length)]);
          break;
        }
        default:
          return;
      }
    }
  }, [postList]);

  const onNavigate = (location) => {
    navigate(`/${location}`);
  };

  const anotherPost = () => {
    const removeFilteredPost = filteredPostList.filter((data) => data._id !== randomPost._id);
    console.log(filteredPostList);
    console.log(randomPost);
    console.log(removeFilteredPost);
    setfilteredPostList(removeFilteredPost);
    setRandomPost(removeFilteredPost[Math.trunc(Math.random() * removeFilteredPost.length)]);
  };

  return (
    <>
      {randomPost && (
        <>
          <S.EmotionResultLayout>
            <S.H1>
              AI의 분석 결과 : <S.Highlight>{state}</S.Highlight> 보입니다.
            </S.H1>
            <S.H2>당신과 공감하는 사용자의 글</S.H2>
            <S.ContentBox>
              <UserProfile
                author={randomPost?.author}
                content={randomPost?.content}
                image={randomPost?.image}
                createdAt={randomPost?.createdAt}
                comments={randomPost?.comments}
                heartCount={randomPost?.heartCount}
                id={randomPost?._id}
                emotionAi={true}
              />
            </S.ContentBox>
            <S.Button
              onClick={() => anotherPost()}
              postLength={filteredPostList.length}
              disabled={filteredPostList.length !== 1 ? false : true}>
              {filteredPostList.length !== 1 ? '다른 게시글 추천 받기' : '더 추천 받을 게시글이 없습니다.'}
            </S.Button>
            {/* <S.Button onClick={() => onNavigate('emotion')}>다시 분석하기</S.Button>
            <S.Button onClick={() => onNavigate('home')}>홈으로 돌아가기</S.Button> */}
          </S.EmotionResultLayout>
        </>
      )}
    </>
  );
}
