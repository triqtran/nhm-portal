import Home from 'modules';

type Routes = {
  title: string;
  path: string;
  Component: () => JSX.Element;
};

const ROUTES = [
  {
    title: 'Home',
    path: '/',
    Component: Home,
  },
] as Routes[];

export default ROUTES;
