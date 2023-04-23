import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  height: 113px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px 20px 0px 20px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo =  styled.Image`
  width: 110px;
  height: 38px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const ChevronLeftIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 25,
  color: theme.COLORS.BLUE_500
}))``;


export const PageTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLUE_700};
  `};
`;
