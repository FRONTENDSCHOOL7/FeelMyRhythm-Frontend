import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import Write from '../../components/write/Write';
import { WriteLayout } from './Write.styled';

export default function WritePage() {
  return (
    <WriteLayout>
      <Header />
      <Write />
      <Footer />
    </WriteLayout>
  );
}
