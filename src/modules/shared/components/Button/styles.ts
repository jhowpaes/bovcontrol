import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { ButtonTypeStyleProps } from '@modules/shared/models/ButtonTypeStyleProps';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 40px;
  max-height: 40px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.BLUE_700 : theme.COLORS.BLUE_500 };
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const LabelButton = styled.Text`
  ${({ theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD }
  `};
`;