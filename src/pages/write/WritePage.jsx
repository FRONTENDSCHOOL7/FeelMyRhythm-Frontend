import React, { useEffect, useRef, useState } from 'react';
import * as S from './WritePage.styled';
import NavBar from '../../components/common/NavBar/NavBar';
import Write from '../../components/write/Write';
import { useMutation } from '@tanstack/react-query';
import { createPost } from '../../apis/write/writeAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { atomEmotionState, atomPostContent, atomYoutubeSearchKeyword } from '../../store/store';

export default function WritePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [emojiState, setEmojiState] = useRecoilState(atomEmotionState);
  const setYoutubeSearchKeyword = useSetRecoilState(atomYoutubeSearchKeyword);
  const textInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  const [postContent, setPostContent] = useRecoilState(atomPostContent);

  useEffect(() => {
    if (state) {
      setPostContent((prev) => ({
        post: {
          ...prev.post,
          image:
            state === null
              ? 'ms7-3'
              : `ms7-3🈳${state.id}🈳${state.title}🈳${state.thumbnail}🈳${emojiState === '선택' ? '전체' : emojiState}`
        }
      }));
    }
  }, [state]);

  const handleChangeInput = (e) => {
    setPostContent({ ...postContent, post: { ...postContent.post, content: e.target.value } });
    textInputRef.current.style.height = textInputRef.current.scrollHeight + 'px';
    console.log(postContent);
  };

  const { mutate: writeMutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      setEmojiState('선택');
      setPostContent({
        post: {
          content: '',
          image: ''
        }
      });
      setYoutubeSearchKeyword('');
      navigate('/home');
    },
    onError: ({ response }) => {
      alert(response.data.message);
    }
  });

  return (
    <S.WritePageLayout>
      <NavBar postContent={postContent} writeMutate={writeMutate} />
      <Write
        state={state}
        postContent={postContent}
        textInputRef={textInputRef}
        setPostContent={setPostContent}
        handleChangeInput={handleChangeInput}
      />
    </S.WritePageLayout>
  );
}
