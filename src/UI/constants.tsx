import { Animated } from 'react-native/Libraries/Animated/Animated';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const headerHeight = 30;
export const footerHeight = 45;
export const insetsBlurIntensity = 75;

export const screenMargin = '3%';

export const Colors = {
  main: '#FFA500',
  light: {
    text: '#000',
    // background: '#fff',
    background: 'rgb(202, 202, 202)',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    card: 'rgb(243, 242, 248)',
    shadow: 'rgba(0,0,0,0.1)',
  },
  dark: {
    text: '#fff',
    // background: '#000',
    background: 'rgb(50, 50, 50)',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    card: 'rgb(10, 10, 10)',
    shadow: 'rgba(255,255,255,0.1)',
  },
};

export type TRegularWeight =
  | '400'
  | 'bold'
  | 'normal'
  | '100'
  | '200'
  | '300'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export type TWeightAlt =
  | '400'
  | 'bold'
  | Animated.Value
  | Animated.AnimatedInterpolation<string | number>
  | 'normal'
  | '100'
  | '200'
  | '300'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface IFonts {
  default: {
    regularSize: number;
    regularWeight: TRegularWeight;
    uiSize: number;
    uiWeightAlt: TRegularWeight;
    uiWeight: TWeightAlt;
  };
}

const fontSizeRegular = 23;
const fontWeightRegular = '400';
const fontSizeUI = 18;
const fontWeightUI = '700';

export const Fonts = {
  default: {
    regularSize: fontSizeRegular,
    regularWeight: fontWeightRegular,
    uiSize: fontSizeUI,
    uiWeightAlt: fontWeightUI,
    uiWeight: fontWeightUI,
  },
} as IFonts;
