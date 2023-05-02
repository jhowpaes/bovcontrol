import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import BackgroundFetch from 'react-native-background-fetch';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import theme from '@core/theme';
import { MainNavigation } from '@core/navigation';
import { Loading } from '@modules/shared/components/Loading';
import { RealmContextProvider } from '@core/database/context/RealmContext';
import { useInternet, InternetProvider } from '@core/context/InternetContext';
import { backgroundSync, syncOfflineData } from '@core/database/services/realmBackgroundSync';

export default function App() {
  const { isInternetActive } = useInternet();
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black
  });

  useEffect(() => {
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // minutes
      },
      backgroundSync,
      (error) => {
        console.log('[BackgroundFetch] failed to start');
      },
    );

    return () => {
      BackgroundFetch.stop();
    };
  }, []);

  useEffect(() => {
    if (isInternetActive) {
      syncOfflineData();
    }
  }, [isInternetActive]);

  return (
    <InternetProvider>
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
    </InternetProvider>
  );
}
