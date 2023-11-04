import React, { useEffect, useState } from 'react';
import * as S from './Comment.styled';
import { atomMyInfo } from '../../../store/store';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { commentDeleteAPI, commentReportAPI } from '../../../apis/comment/commentAPI';
import moment from 'moment';
import 'moment/locale/ko';
import Modal from '../../common/Modal/Modal';

export default function Comment({ data }) {
  const user = useRecoilValue(atomMyInfo);
  const navigate = useNavigate();
  const [comment, setComment] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { author, createdAt, content } = data || {};

  const goProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  const commentTime = (createdAt) => {
    return moment(createdAt).fromNow();
  };

  useEffect(() => {
    setComment(data);
  }, [data]);

  if (!data) {
    return <S.CommentLayout />;
  }

  return (
    <S.CommentLayout>
      <S.CommentBox>
        <S.CommentInfo>
          {data?.img}
          <S.ProfileImg src={author?.image} onClick={goProfile} />
          <S.TitleContent>{author?.username}</S.TitleContent>
          <S.TimeBox>·{commentTime(createdAt)}</S.TimeBox>
          <S.MoreBtn />
        </S.CommentInfo>
        <S.CommentContent>{content}</S.CommentContent>
      </S.CommentBox>
      <Modal postModal={true} postUser={author?.accountname} isOpen={isModalOpen} onClose={toggleModal}></Modal>
    </S.CommentLayout>
  );
}
