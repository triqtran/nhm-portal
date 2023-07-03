import { Menu } from 'antd';
import MENU_LIST from 'constants/menuList';
import PATH from 'constants/path';
import type { MenuProps } from 'antd';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { LogoContainer, LogoImg } from './style';

type MenuItem = Required<MenuProps>['items'][number];

export default function NHMMenu() {
  const { pathname } = useLocation();

  const getSelectKeys = useMemo(() => {
    if (pathname === '/') return PATH.HOME;
    return pathname;
  }, [pathname]);

  return (
    <>
      <div>
        <LogoContainer id='logo'>
          <Link to={PATH.HOME}>
            <LogoImg src='/logo.jpg' />
          </Link>
        </LogoContainer>
        <Menu
          mode='inline'
          theme='dark'
          selectedKeys={[getSelectKeys]}
          // defaultOpenKeys={openKeys}
          items={MENU_LIST.map(item => {
            if (item.sub != null) {
              return {
                key: item.path,
                label: (
                  <div title={item.title}>
                    <span>{item.title}</span>
                  </div>
                ),
                icon: <item.icon />,
                children: item.sub?.map(
                  subItem =>
                    ({
                      key: subItem.path,
                      label: (
                        <div title={subItem.title}>
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
