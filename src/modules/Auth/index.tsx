import { Form, Input } from 'antd';
import text from 'constants/text';
import { Button } from 'cores/components';
import { LogInRequest } from './type';
import { login } from './slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'reduxStore/hooks';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PATH from 'constants/path';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth, shallowEqual);

  const handleLogin = (values: LogInRequest) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (!auth.authenticating && auth.token) {
      navigate(PATH.HOME);
    }
  }, [auth.authenticating, auth.token]);

  return (
    <div>
      <Form onFinish={handleLogin} layout='vertical'>
        <Form.Item
          name='email'
          rules={[
            { required: true, message: text.EMAIL_REQUIRED },
            { type: 'email', message: text.VALIDATE_EMAIL },
          ]}
          label={text.EMAIL}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: text.PASSWORD_REQUIRED }]}
          label={text.PASSWORD}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            loading={auth.authenticating}
            htmlType='submit'
            type='primary'
          >
            {text.LOGIN}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
