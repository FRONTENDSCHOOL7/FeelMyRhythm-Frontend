import React from 'react';
import * as S from './ProfilePostList.styled';
import test_img from '../../assets/images/profile/basic-profile-img.svg';

export default function PostListBento() {
  return (
    <>
      <S.PostAlbumBox>
        <S.PostThumbnailBox>
          <img src={test_img} alt='' />
        </S.PostThumbnailBox>
        <S.PostThumbnailBox></S.PostThumbnailBox>
        <S.PostThumbnailBox></S.PostThumbnailBox>
        <S.PostThumbnailBox></S.PostThumbnailBox>
        <S.PostThumbnailBox></S.PostThumbnailBox>
        <S.PostThumbnailBox></S.PostThumbnailBox>
        <S.PostThumbnailBox></S.PostThumbnailBox>
        <S.PostThumbnailBox></S.PostThumbnailBox>
        <S.PostThumbnailBox></S.PostThumbnailBox>
      </S.PostAlbumBox>
    </>
  );
}
