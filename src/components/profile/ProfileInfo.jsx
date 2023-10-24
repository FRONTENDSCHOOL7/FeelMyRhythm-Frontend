import React from 'react';
import * as S from './ProfileInfo.styled';
import basicProfile from '../../assets/images/profile/basic-profile-img.svg';
import ProfileInfoBtn from './ProfileInfoBtn';
import ProfileMyInfoBtn from './ProfileInfoMyBtn';

export default function ProfileInfo() {
  const user_flag = false;

  return (
    <S.ProfileInfoLayout>
      <S.RowBox>
        <S.ColBox>
          <S.FollowNum $fontColor='#000'>2950</S.FollowNum>
          <S.FollowText>followers</S.FollowText>
        </S.ColBox>
        <S.ImgBox>
          <img src={basicProfile} alt='회원 프로필 사진'></img>
        </S.ImgBox>
        <S.ColBox>
          <S.FollowNum $fontColor='#767676'>128</S.FollowNum>
          <S.FollowText>followings</S.FollowText>
        </S.ColBox>
      </S.RowBox>
      <S.TitleContent>애월읍 위니브 감귤농장</S.TitleContent>
      <S.IDContent>@ weniv_Mandarin</S.IDContent>
      <S.IntroContent>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</S.IntroContent>
      <S.RowButtonBox>{user_flag ? <ProfileMyInfoBtn /> : <ProfileInfoBtn />}</S.RowButtonBox>
    </S.ProfileInfoLayout>
  );
}
