import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightGray: string;
      blue: string;
      purple: string;
      lightRed: string;
      white: string;
      yellow: string;
      primary: string;
      background: string;
    };
    padding: {
      side: number;
    };
  }
}
