import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(20)}px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: ${RFValue(16)}px;
`;