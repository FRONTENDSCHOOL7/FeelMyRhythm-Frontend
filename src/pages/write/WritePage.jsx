import React, { useEffect, useRef, useState } from 'react';
import * as S from './WritePage.styled';
import NavBar from '../../components/common/NavBar/NavBar';
import Write from '../../components/write/Write';
import { useMutation } from '@tanstack/react-query';
import { createPost, updatePost } from '../../apis/write/writeAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { atomEmotionState, atomPostContent, atomPostUpdateContent, atomYoutubeSearchKeyword } from '../../store/store';

export default function WritePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [emojiState, setEmojiState] = useRecoilState(atomEmotionState);
  const setYoutubeSearchKeyword = useSetRecoilState(atomYoutubeSearchKeyword);
  const textInputRef = useRef(null);

  const [postContent, setPostContent] = useRecoilState(atomPostContent);

  const setUpdatePostContent = useSetRecoilState(atomPostUpdateContent);

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   token ?? navigate('/');
  // }, []);

  useEffect(() => {
    if (state && !state.update) {
      setPostContent((prev) => ({
        post: {
          ...prev.post,
          image:
            state === null
              ? 'ms7-3'
              : `ms7-3🈳${state.id}🈳${state.title}🈳${state.thumbnail}🈳${emojiState === '선택' ? '전체' : emojiState}`
        }
      }));
    } else if (state && state.update) {
      setPostContent({
        post: {
          content: state.content,
          image:
            state === null ? 'ms7-3' : `ms7-3🈳${state.id}🈳${state.title}🈳${state.thumbnail}🈳${state.emojiState}`
        }
      });
    }
  }, []);

  useEffect(() => {
    setPostContent((prev) => ({
      post: {
        ...prev.post,
        image:
          state === null
            ? 'ms7-3'
            : `ms7-3🈳${state.id}🈳${state.title}🈳${state.thumbnail}🈳${emojiState === '선택' ? '전체' : emojiState}`
      }
    }));
  }, [emojiState]);

  const handleChangeInput = (e) => {
    setPostContent((prev) => ({ ...postContent, post: { ...prev.post, content: e.target.value } }));
    textInputRef.current.style.height = textInputRef.current.scrollHeight + 'px';
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
      setUpdatePostContent({
        content: '',
        image: ''
      });
      setYoutubeSearchKeyword('');
      navigate('/home');
    },
    onError: ({ response }) => {
      alert('게시글 내용 또는 영상을 첨부해주세요');
    }
  });

  const { mutate: updatePostMutate } = useMutation({
    mutationFn: updatePost,
    onSuccess: (res) => {
      setEmojiState('선택');
      setPostContent({
        post: {
          content: '',
          image: ''
        }
      });
      setUpdatePostContent({
        content: '',
        image: ''
      });

      setYoutubeSearchKeyword('');
      navigate('/home');
    },
    onError: ({ response }) => {
      alert('게시글 내용 또는 영상을 첨부해주세요');
    }
  });

  return (
    <S.WritePageLayout>
      <NavBar postContent={postContent} writeMutate={writeMutate} updatePostMutate={updatePostMutate} />
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
