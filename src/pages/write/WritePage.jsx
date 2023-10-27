import React, { useState } from 'react';
import * as S from './WritePage.styled';
import NavBar from '../../components/common/NavBar/NavBar';
import Write from '../../components/write/Write';
import { useMutation } from '@tanstack/react-query';
import { createPost } from '../../apis/write/writeAPI';
import { useLocation, useNavigate } from 'react-router-dom';

export default function WritePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const [postContent, setPostContent] = useState({
    post: {
      content: '',
      image: state === null ? 'ms7-3' : `ms7-3🈳${state.id}🈳${state.title}🈳${state.thumbnail}`
    }
  });

  const handleChangeInput = (e) => {
    setPostContent({ ...postContent, post: { ...postContent.post, content: e.target.value } });
    console.log(postContent);
  };

  const { mutate: writeMutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
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
        setPostContent={setPostContent}
        handleChangeInput={handleChangeInput}
      />
    </S.WritePageLayout>
  );
}
