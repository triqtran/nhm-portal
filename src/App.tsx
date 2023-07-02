import './App.css';
import { ThemeProvider } from 'styled-components';
import { antdConfig, styledConfig } from './cores/theme';
import { ConfigProvider, Spin } from 'antd';
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

function Splash() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth, shallowEqual);

  if (!auth.token) {
    // check in localStorage
    // if have -> fetch token
    if (authStorage.get()) {
      dispatch(getProfile());
    }
    // if no -> redirect to login screen
    else {
      return <Navigate to={PATH.LOGIN} />;
    }

    return (
      <div>
        <Spin spinning />
      </div>
    );
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
