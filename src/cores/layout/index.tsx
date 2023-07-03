import { Avatar, Dropdown, Layout, Typography } from 'antd';
import { useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import NavBar from './NavBar';
import SiderBar from './SiderBar';
import NHMMenu from './Menu';
import { UserOutlined } from '@ant-design/icons';
import {
  AvatarContainer,
  CopyRight,
  LayoutContent,
  LayoutHeader,
  Trigger,
} from './style';
import { useDispatch, useSelector } from 'reduxStore/hooks';
import { logout } from 'modules/Auth/slice';
import { useNavigate } from 'react-router-dom';
import PATH from 'constants/path';
import { shallowEqual } from 'react-redux';
import text from 'constants/text';

export default function NHMLayout({ children }: { children: JSX.Element }) {
  const [collapsed, setCollapsed] = useState(false);
  const { auth } = useSelector(state => state.auth, shallowEqual);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggle = () => {
    setCollapsed(state => !state);
  };

  const itemsDropdown: MenuProps['items'] = useMemo(
    () => [
      {
        key: 'logout',
        label: (
          <Typography.Text
            onClick={() => {
              dispatch(logout());
              navigate(PATH.LOGIN);
            }}
          >
            Logout
          </Typography.Text>
        ),
      },
    ],
    [dispatch, navigate]
  );

  return (
    <Layout hasSider>
      <NavBar
        menu={NHMMenu()}
        open={collapsed}
        onClose={() => {
          setCollapsed(false);
        }}
      />
      <SiderBar menu={NHMMenu()} />
      <Layout>
        <LayoutHeader>
          <div>
            <Trigger onClick={toggle} />
            {/* <Breadcrumb className='breadcrumb' separator='>'>
              <Breadcrumb.Item key='dashboard'>
                <Link to={PATH.ORDER}>{string.HOME}</Link>
              </Breadcrumb.Item>
              {breadcrumb?.map(item => (
                <Breadcrumb.Item key={item.name}>
                  {item.path ? <Link to={item.path}>{item.name}</Link> : item.name}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb> */}
          </div>
          <AvatarContainer>
            <Dropdown
              menu={{ items: itemsDropdown }}
              trigger={['click']}
              placement='bottomLeft'
            >
              <div>
                <span style={{ marginRight: 10 }}>{auth?.name}</span>
                <Avatar icon={<UserOutlined />} />
              </div>
            </Dropdown>
          </AvatarContainer>
        </LayoutHeader>
        <LayoutContent>{children}</LayoutContent>
        <CopyRight type='secondary'>{text.COPYRIGHT}</CopyRight>
      </Layout>
    </Layout>
  );
}
