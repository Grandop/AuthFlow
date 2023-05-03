import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.onBackground};
  font-size: ${RFValue(20)}px;
  margin-bottom: ${RFValue(16)}px;
  font-weight: bold;
`;
