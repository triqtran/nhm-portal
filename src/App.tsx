import './App.css';
import { ThemeProvider } from 'styled-components';
import { antdConfig, styledConfig } from './cores/theme';
import { ConfigProvider } from 'antd';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import ROUTES from 'constants/routes';
import NHMLayout from 'cores/layout';
import Login from 'modules/Auth';
import 'cores/styles/global.css';
import { useDispatch, useSelector } from 'reduxStore/hooks';
import { shallowEqual } from 'react-redux';
import { authStorage } from 'utils/localStorage';
import { getProfile } from 'modules/Auth/slice';
import PATH from 'constants/path';
import { Loading } from 'cores/components';
import { useEffect } from 'react';

function Splash() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth, shallowEqual);

  useEffect(() => {
    if (!auth.token && authStorage.get()) {
      dispatch(getProfile());
    }
  }, [auth.token, dispatch]);

  if (!auth.token) {
    if (authStorage.get()) {
      return <Loading />;
    }
    return <Navigate to={PATH.LOGIN} />;
  }

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
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.Component />}
                />
              ))}
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
