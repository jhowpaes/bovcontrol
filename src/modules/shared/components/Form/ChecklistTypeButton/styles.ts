import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Props = {
  isActive: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;

  ${({ isActive, theme }) => isActive ? css`
    background-color: ${theme.COLORS.GREEN_600};
  ` : css`
    background-color: ${theme.COLORS.BLUE_100};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  `};
`;

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};

  ${({ isActive, theme }) => isActive ? css`
    color: ${theme.COLORS.WHITE};
  ` : css`
    color: ${theme.COLORS.BLUE_900};
  `}
`;
