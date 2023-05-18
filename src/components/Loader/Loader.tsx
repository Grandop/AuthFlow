import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as S from './styles';

export const Loader = () => {
  return (
    <S.LoaderContainer>
      <S.Loader size="large" color="#FFF" />
    </S.LoaderContainer>
  );
};

export default Loader;
