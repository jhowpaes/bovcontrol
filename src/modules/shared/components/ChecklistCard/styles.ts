import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 122px;

  background: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  border-radius: 6px;
  margin-top: 20px;
`;

export const SyncStatus = styled.View`
  background: ${({ theme }) => theme.COLORS.GREEN_600};
  width: 5px;
  height: 100%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const Content = styled.View`
  flex: 1px;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`;


export const FarmerContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const FarmerName = styled.Text`
  margin-left: 10px;
`;

export const Farm = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FarmNameLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `};
`;

export const FarmNameContent = styled.View`
`;

export const FarmCityLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `};
`;

export const FarmCityContent = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const FarmName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const FarmCity = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const CreatedAt = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
  `};
  text-align: right;
`;
