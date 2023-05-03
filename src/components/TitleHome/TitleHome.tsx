import React from "react";
import * as S from './styles'

interface TitleProps {
  title: string
}

export default function TitleHome({title}: TitleProps) {
  return(
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}