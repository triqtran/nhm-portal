import './App.css';
import { ThemeProvider } from 'styled-components';
import { antdConfig, styledConfig } from './cores/theme';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ROUTES from 'constants/routes';
import NHMLayout from 'cores/layout';

function Splash() {
  
  return (
    <NHMLayout>
      <Outlet />
    </NHMLayout>
  );
}

function App() {
  return (
    <ThemeProvider theme={styledConfig}>
      <ConfigProvider theme={antdConfig}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Splash />}>
              {ROUTES.map(route => (
                <Route key={route.path} path={route.path} element={<route.Component />} />
              ))}
            </Route>
            <Route path='/login' element={<div>LOGIN</div>} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
