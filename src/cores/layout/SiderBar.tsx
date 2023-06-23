import Sider from 'antd/lib/layout/Sider';

type SiderBarProps = {
  menu: JSX.Element;
};

export default function SiderBar({ menu }: SiderBarProps) {
  return (
    <Sider className='sidebar' breakpoint='md' collapsedWidth={60} trigger={null} width={250}>
      {menu}
    </Sider>
  );
}
