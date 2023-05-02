import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

type Props = {
  group: boolean;
};

export const Container = styled.View<Props>`
  flex: 1;
  min-height: 75px;
  max-height: 75px;
`;

export const InputContent = styled(TextInput)<Props>`
  flex: 1;
  min-height: 40px;
  max-height: 40px;

  ${({ group }) => group && css`
    width: 95%;
  `};

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.BLUE_900};
    border-color: ${theme.COLORS.GRAY_200};
  `};
  border-width: 1px;
  border-radius: 6px;
  padding: 10px;
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLUE_900};
  `}
  margin-bottom: 8px;
`;
