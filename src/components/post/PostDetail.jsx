import React, { useEffect, useState } from 'react';
import * as S from './PostDetail.styled';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';
import { ReactComponent as ColoredHearIcon } from '../../assets/images/home/heart.svg';
import basicProfile from '../../assets/images/home/basic-profile.png';
import { useQuery } from '@tanstack/react-query';
import { readDetailPost } from '../../apis/post/detailPostAPI';
import { useLocation, useNavigate, useParams } from 'react-router';

const handleLike = () => {};

export default function Default() {
  const navigate = useNavigate();

  const [createdAt, setCreateAt] = useState();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');

  const { id } = useParams();

  const { data } = useQuery({
    queryFn: () =>
      readDetailPost(id).then((res) => {
        setCreateAt(new Date(res.post.createdAt));
        return res;
      }),
    queryKey: ['']
  });

  useEffect(() => {
    if (data && createdAt) {
      setYear(createdAt.getFullYear());
      setMonth(createdAt.getMonth() + 1);
      setDate(createdAt.getDate());
    }
  }, [createdAt]);

  return (
    <S.ContainerBox>
      {data && (
        <>
          <S.AboutUserBox onClick={() => navigate('/profile/' + data?.post?.author?.accountname)}>
            <S.StyledProfileImg
              src={
                String(data?.post?.author?.image).includes('Ellipse.png') || !data?.post?.author?.image
                  ? basicProfile
                  : data?.post?.author?.image
              }
              alt='프로필'
            />
            <S.UserInfoBox>
              <S.H2>{data?.post?.author?.username}</S.H2>
              <S.H3>{data?.post?.author?.accountname}</S.H3>
            </S.UserInfoBox>
            <S.Button
              onClick={(e) => {
                e.stopPropagation();
              }}>
              <KebabIcon />
            </S.Button>
          </S.AboutUserBox>
          <S.ContentsBox>
            <S.DescriptionContent>{data?.post?.content}</S.DescriptionContent>
            <S.Iframe src={`http://www.youtube.com/embed/${data?.post?.image.split('🈳')[1]}`} />
          </S.ContentsBox>

          <S.IconsBox>
            <S.StyledHeartBox onClick={() => handleLike()}>
              {data?.post?.hearted ? <ColoredHearIcon /> : <HeartIcon />}
            </S.StyledHeartBox>
            <S.NumBox className='heartnum'>{data?.post?.heartCount}</S.NumBox>
            <S.StyledMessageBox>
              <MessageIcon />
            </S.StyledMessageBox>
            <S.NumBox className='messnum'>{data?.post?.commentCount}</S.NumBox>
          </S.IconsBox>

          <S.Date>
            {year}년 {month}월 {date}일
          </S.Date>
        </>
      )}
    </S.ContainerBox>
  );
}
