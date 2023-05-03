import React from "react";
import * as S from './styles'

interface TitleProps {
  title: string
}

export default function TitleLogin({title}: TitleProps) {
  return(
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}