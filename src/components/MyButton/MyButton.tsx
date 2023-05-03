import React from "react";
import * as S from './styles'
import { TouchableOpacityProps } from "react-native";

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function MyButton({title,...rest}: MyButtonProps) {
  return(
    <S.Button {...rest}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Button>
  );
}