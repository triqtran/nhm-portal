import { Menu } from 'antd';
import Text from 'antd/lib/typography/Text';
import MENU_LIST from 'constants/menuList';
import PATH from 'constants/path';
import string from 'constants/text';
import type { MenuProps } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

type MenuItem = Required<MenuProps>['items'][number];

export default function NHMMenu() {
  return (
    <>
      <div>
        <div
          id='logo'
          style={{ height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Link to={PATH.HOME}>NIHAOMA</Link>
        </div>
        <Menu
          mode='inline'
          theme='dark'
          // selectedKeys={defaultSelectedKeys}
          // defaultOpenKeys={openKeys}
          items={MENU_LIST.map(item => {
            if (item.sub) {
              return {
                key: item.path,
                label: (
                  <div className='flex justify' title={item.title}>
                    <span>{item.title}</span>
                  </div>
                ),
                icon: <item.icon />,
                children: item.sub?.map(
                  subItem =>
                    ({
                      key: subItem.path,
                      label: (
                        <div className='flex justify' title={subItem.title}>
                          <NavLink to={subItem.path || '/'}>
                            <span>{subItem.title}</span>
                          </NavLink>
                        </div>
                      ),
                      icon: <subItem.icon />,
                    } as MenuItem)
                ),
              } as MenuItem;
            }
            return {
              key: item.path,
              label: (
                <NavLink to={item.path || '/'} title={item.title}>
                  <span>{item.title}</span>
                </NavLink>
              ),
              icon: <item.icon />,
            } as MenuItem;
          })}
        />
      </div>
    </>
  );
}
