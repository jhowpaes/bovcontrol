import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Props = {
  checked: boolean;
}

export const Container = styled.View`
  flex-direction: column;
`;

export const CheckLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLUE_900};
  `}
  margin-bottom: 8px;
`;

export const CheckedArea = styled(TouchableOpacity)<Props>`
  ${({ theme, checked }) => checked ? css`
    border: 1px solid ${theme.COLORS.BLUE_700};
    background-color: ${theme.COLORS.BLUE_100};
  ` : css`
    border: 1px solid ${theme.COLORS.GRAY_200};
    background-color: ${theme.COLORS.WHITE};
  `}

  width: 40px;
  height: 40px;
  border-radius: 6px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
`;


