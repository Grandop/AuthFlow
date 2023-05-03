import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const TextField = styled.TextInput`
  border-radius: ${RFValue(8)}px;
  border-color: ${({ theme }) => theme.colors.primary};
  padding-left: ${RFValue(8)}px;
  padding-right: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.onBackground};
  border-width: ${RFValue(1)}px;
  width: 90%;
  height: ${RFValue(50)}px;
  margin-bottom: ${RFValue(16)}px;
`;
