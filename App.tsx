import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import theme from '@core/theme';
import { MainNavigation } from '@core/navigation';
import { Loading } from '@modules/shared/components/Loading';
import { RealmContextProvider } from '@core/database/context/RealmContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black
  });

  return (
    <ThemeProvider theme={theme}>
      <RealmContextProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <MainNavigation /> : <Loading />}
      </RealmContextProvider>
    </ThemeProvider>
  );
}
