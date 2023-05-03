import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${RFValue(16)}px;
  padding-bottom: ${RFValue(32)}px;
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;