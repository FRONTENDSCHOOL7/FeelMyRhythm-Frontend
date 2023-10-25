import React from 'react';
import * as S from './NavBar.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import search from '../../../assets/images/navbar/icon_search.svg';
import arrowLeft from '../../../assets/images/navbar/icon-arrow-left.svg';
import KebabBtn from '../../../assets/images/navbar/icon_kebab.svg';

export default function Header({ postContent, writeMutate }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  const handleSearchClick = () => {
    navigate('/home/search');
  };

  const onCreatePost = () => {
    writeMutate(postContent);
  };

  return (
    <S.HeaderLayout>
      {pathname === '/home' && (
        <>
          <S.HeaderTitle>Music 피드</S.HeaderTitle>
          <S.SearchImg src={search} onClick={handleSearchClick} />
        </>
      )}
      {pathname === '/write' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.SaveBtn valid={postContent.post.content !== '' ? 'done' : 'none'} onClick={onCreatePost}>
            업로드
          </S.SaveBtn>
        </>
      )}
      {pathname === '/post' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
        </>
      )}
      {pathname === '/profile' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.KebabBtnImg src={KebabBtn} />
        </>
      )}
      {pathname === '/followers' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.HeaderContent>Followers</S.HeaderContent>
        </>
      )}
      {pathname === '/followings' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.HeaderContent>Followings</S.HeaderContent>
        </>
      )}
      {pathname === '/chat' && (
        <>
          <S.ArrowLeftImg src={arrowLeft} onClick={() => navigate(-1)} />
          <S.HeaderContent>user_name</S.HeaderContent>
          <S.KebabBtnImg src={KebabBtn} />
        </>
      )}
    </S.HeaderLayout>
  );
}
