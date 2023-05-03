import React from "react";
import * as S from './styles'
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";


export default function MyTextField(props: TextInputProps) {
  return(
    <S.TextField placeholderTextColor='#727272' {...props} />
  );
}