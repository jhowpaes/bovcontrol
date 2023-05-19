import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View``;

export const Content = styled.View`
  flex: 1;
  margin: 20px;
`;

export const UpdateButton = styled(TouchableOpacity)`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const DetailsContent = styled.View``;

export const ChecklistTextItem = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
