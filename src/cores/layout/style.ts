import { MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import styled from 'styled-components';

export const LayoutHeader = styled(Layout.Header)`
  padding: 0 !important;
  justify-content: space-between !important;
  display: flex !important;
  background-color: white;
`;

export const Trigger = styled(MenuFoldOutlined)`
  display: none;
  @media (max-width: 992px) {
    display: block;
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }
`;

export const AvatarContainer = styled.div`
  padding: 0 24px;
  cursor: pointer;
`;

export const LayoutContent = styled(Layout.Content)`
  margin: 24px 16px;
  padding: 20px;
  min-height: 280px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 16px 24px -8px rgba(169, 174, 184, 0.24);
`;

export const LogoContainer = styled.div`
  height: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SideBar = styled(Sider)`
  box-shadow: 16px 0px 24px -8px rgba(169, 174, 184, 0.12);
  overflow: auto;
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  bottom: 0;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  height: auto;
  margin: 20px auto;
`;

export const CopyRight = styled(Typography.Paragraph)`
  text-align: center;
`;
