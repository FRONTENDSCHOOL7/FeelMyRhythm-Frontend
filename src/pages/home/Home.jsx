import React from 'react';
import NavBar from '../../components/common/NavBar/NavBar';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import NoFollow from '../../components/home/NoFollow';
import YesFollow from '../../components/home/YesFollow';
import * as S from './home.styled';

export default function Home() {
  return (
    <S.HomeLayout>
      <NavBar />
      <NoFollow />
      <YesFollow />
      <TabMenu />
    </S.HomeLayout>
  );
}
