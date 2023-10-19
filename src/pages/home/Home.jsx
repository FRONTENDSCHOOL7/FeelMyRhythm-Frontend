import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import NoFollow from '../../components/home/NoFollow';
import YesFollow from '../../components/home/YesFollow';
import * as S from './home.styled';

export default function Home() {
  return (
    <S.HomeLayout>
      <Header />
      <NoFollow />
      <YesFollow />
      <Footer />
    </S.HomeLayout>
  );
}
