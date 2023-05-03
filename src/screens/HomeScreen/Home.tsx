import React from "react";
import * as S from './styles'
import TitleHome from "../../components/TitleHome/TitleHome";
import MyButton from "../../components/MyButton/MyButton";
import { useNavigation } from "@react-navigation/native";

interface Nav {
  navigate: (value: string) => Event;
}

export default function Home() {
  const { navigate } = useNavigation<Nav>();

  return (
    <S.ContainerView>
      <TitleHome title="Essa tela só pode ser vista por usuários autentificados"/>
      <MyButton
        onPress={() => navigate('Settings')}
        title="Ir para Configurações" 
      />
    </S.ContainerView>
  );
}