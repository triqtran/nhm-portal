import { Avatar, Dropdown, Layout, Typography } from 'antd';
import { useState } from 'react';
import type { MenuProps } from 'antd';
import NavBar from './NavBar';
import SiderBar from './SiderBar';
import NHMMenu from './Menu';
import { UserOutlined } from '@ant-design/icons';
import { AvatarContainer, LayoutContent, LayoutHeader, Trigger } from './style';

const itemsDropdown: MenuProps['items'] = [
  {
    key: 'logout',
    label: (
      <Typography.Text
        onClick={() => {
          console.log('logout');
        }}
      >
        Logout
      </Typography.Text>
    ),
  },
];

export default function NHMLayout({ children }: { children: JSX.Element }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(state => !state);
  };
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
                <span style={{ marginRight: 10 }}>Name</span>
                <Avatar icon={<UserOutlined />} />
              </div>
            </Dropdown>
          </AvatarContainer>
        </LayoutHeader>
        <LayoutContent>{children}</LayoutContent>
      </Layout>
    </Layout>
  );
}
