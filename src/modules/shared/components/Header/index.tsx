import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Logo, Container, BackButton, ChevronLeftIcon, PageTitle, Content } from './styles';

import ImageLogo from '@core/assets/logo.png';

type Props = {
  showBackButton?: boolean;
  showHeaderLogo?: boolean;
  title?: string;
}

export function Header({ 
  showBackButton = false, 
  showHeaderLogo = true,
  title,
}: Props){
  const navigation = useNavigation();
  
  return (
    <Container>
      <Content>
        {
          showBackButton && (
            <BackButton onPress={() => navigation.goBack()}>
              <ChevronLeftIcon />
            </BackButton>
          )
        }
        {
          showHeaderLogo ? (
            <Logo source={ImageLogo} resizeMode='contain' />
          ) : (
            <PageTitle>
              {title}
            </PageTitle>
          )
        }
      </Content>
    </Container>
  );
}