import { SideBar } from './style';

interface SiderBarProps {
  menu: JSX.Element;
}

export default function SiderBar({ menu }: SiderBarProps) {
  return (
    <SideBar breakpoint='md' collapsedWidth={60} trigger={null} width={250}>
      {menu}
    </SideBar>
  );
}
