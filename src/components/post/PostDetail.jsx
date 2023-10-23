import React from 'react'
import * as S from './PostDetail.styled'
import userlogo from '../../images/post/profile-img.png'



export default function Post() {
  return (
    <S.PostDetail>
      <S.Upload>
        <S.UserImg src={userlogo} />
        <S.TxtInput 
        type="text"
        placeholder='게시글 입력하기...'
        />
      </S.Upload>
      <S.UploadBtn type='button'></S.UploadBtn>
    </S.PostDetail>
  )
}