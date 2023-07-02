import { Drawer } from 'antd';

interface NavBarProps {
  menu: JSX.Element;
  onClose: () => void;
  open: boolean;
}

export default function NavBar({ menu, onClose, open }: NavBarProps) {
  return (
    <nav>
      <Drawer
        className='navbar-theme'
        placement='left'
        onClose={onClose}
        open={open}
        width={300}
      >
        {menu}
      </Drawer>
    </nav>
  );
}
