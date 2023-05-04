import React from "react";
import * as S from './styles'
import TitleLogin from "../../components/TitleLogin/TitleLogin";
import MyButton from "../../components/MyButton/MyButton";
import { useAuth } from "../../hooks/useAuth";

export default function SettingScreen() {
  const { signOut } = useAuth();

  return(
    <S.ContainerView>
      <TitleLogin title="Configurações" />
      <MyButton onPress={signOut} style={{backgroundColor: 'red'}} title="Deslogar do App" />
    </S.ContainerView>
  );
}