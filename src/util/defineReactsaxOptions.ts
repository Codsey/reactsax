import { setColor } from './index';

export interface ReactsaxOptions {
  colors?: ReactsaxColors;
}

export interface ReactsaxColors {
  [item: string]: any;
  primary: string;
  success: string;
  danger: string;
  warn: string;
  dark: string;
}

const defineColors = (colors: ReactsaxColors) => {
  Object.keys(colors).forEach(item => {
    setColor(item, colors[item], document.body);
  });
};

export const defineReactsaxOptions = (options: ReactsaxOptions) => {
  console.log(options);
  if (!!options.colors) {
    defineColors(options.colors);
  }
};
