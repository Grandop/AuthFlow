import styled from "styled-components/native";

export const LoaderContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.ActivityIndicator`
`;