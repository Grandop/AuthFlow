import React, { useContext, useState } from "react";
import * as S from './styles'
import MyTextField from "../../components/TextFields/TextFields";
import MyButton from "../../components/MyButton/MyButton";
import TitleLogin from "../../components/TitleLogin/TitleLogin";
import useAuth from "../../hooks/useAuth";
import { ThemeContext, TypeTheme } from "../../theme/Theme";
import { Switch } from "react-native";
import { Keyboard, TouchableWithoutFeedback } from 'react-native';


export default function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth();
  const { toggleTheme, theme } = useContext(ThemeContext)

  const isDarkMode = theme === TypeTheme.dark; 

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.ContainerView>
        <Switch value={isDarkMode} onValueChange={toggleTheme}/>

        <TitleLogin title="Log In"/>

        <MyTextField 
          placeholder="e-mail" 
          value={email}
          onChangeText={setEmail}
        />

        <MyTextField 
          placeholder="senha" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <MyButton
          title="Entrar"
          onPress={() => signIn(email, password)}
        />
      </S.ContainerView>
    </TouchableWithoutFeedback>
  );
}
