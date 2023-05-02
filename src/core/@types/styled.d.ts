import 'styled-components';
import theme from '@core/theme';


declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
