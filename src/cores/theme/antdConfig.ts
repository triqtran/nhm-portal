import { type ThemeConfig } from 'antd';
import colors from './colors';

const antdConfig = {
  token: {
    colorPrimary: colors.primary,
    green: colors.green,
    borderRadius: 8,
    fontFamily: 'Lexend Deca',
  },
  components: {},
} as ThemeConfig;

export default antdConfig;
