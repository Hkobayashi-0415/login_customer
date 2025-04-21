// 共通カラーパレット定義
export const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  500: '#2196f3',
  700: '#1976d2',
  900: '#0d47a1',
};

export const pink = {
  100: '#f8bbd0',
  200: '#f48fb1',
};

export const grey = {
  200: '#eeeeee',
  300: '#e0e0e0',
  800: '#424242',
};

// カラーパレット
export const colors = {
  // プライマリカラー
  primary: {
    main: blue[500],
    light: blue[200],
    dark: blue[700],
    contrastText: '#ffffff',
  },
  // セカンダリカラー
  secondary: {
    main: pink[200],
    light: pink[100],
    dark: '#c2185b',
    contrastText: '#ffffff',
  },
  // 成功カラー
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#ffffff',
  },
  // エラーカラー
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#ffffff',
  },
  // 警告カラー
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#ffffff',
  },
  // 情報カラー
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#ffffff',
  },
  // グレースケール
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: grey[200],
    300: grey[300],
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: grey[800],
    900: '#212121',
  },
  // テキストカラー
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  // 背景カラー
  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
  // アクションカラー
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
  },
}; 