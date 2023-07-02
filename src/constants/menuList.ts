import { InfoCircleOutlined } from '@ant-design/icons';
import PATH from './path';

export interface MenuListItem {
  title: string;
  icon: any;
  path?: string;
  sub?: MenuListItem[];
}

export type MenuList = MenuListItem[];

const MENU_LIST = [
  {
    title: 'Home',
    icon: InfoCircleOutlined,
    path: PATH.HOME,
  },
] as MenuList;

export default MENU_LIST;
