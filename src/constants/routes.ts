import Home from 'modules';

interface Routes {
  title: string;
  path: string;
  Component: () => JSX.Element;
}

const ROUTES = [
  {
    title: 'Home',
    path: '/',
    Component: Home,
  },
] as Routes[];

export default ROUTES;
