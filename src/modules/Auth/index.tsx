import { Form, Input } from 'antd';
import text, { TITLE } from 'constants/text';
import { Button } from 'cores/components';
import { LogInRequest } from './type';
import { login } from './slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'reduxStore/hooks';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PATH from 'constants/path';
import {
  ButtonContainer,
  ErrorText,
  LogInContainer,
  LogInTitle,
} from './styles';
import { useTitle } from 'hook';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth, shallowEqual);

  const [isReTouched, setIsReTouched] = useState(false);

  const handleLogin = (values: LogInRequest) => {
    dispatch(login(values));
    setIsReTouched(false);
  };

  useEffect(() => {
    if (!auth.authenticating && auth.token) {
      navigate(PATH.HOME);
    }
  }, [auth.authenticating, auth.token, navigate]);

  useTitle(TITLE.LOGIN);

  return (
    <LogInContainer>
      <LogInTitle>{text.LOGIN}</LogInTitle>
      <Form onFinish={handleLogin} layout='vertical' validateTrigger='submit'>
        <Form.Item
          name='email'
          rules={[
            { required: true, message: text.EMAIL_REQUIRED },
            { type: 'email', message: text.VALIDATE_EMAIL },
          ]}
          label={text.EMAIL}
        >
          <Input onFocus={() => setIsReTouched(true)} />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: text.PASSWORD_REQUIRED }]}
          label={text.PASSWORD}
        >
          <Input.Password onFocus={() => setIsReTouched(true)} />
        </Form.Item>
        {auth.error && !isReTouched && (
          <ErrorText type='danger'>{auth.error}</ErrorText>
        )}
        <ButtonContainer>
          <Button
            loading={auth.authenticating}
            htmlType='submit'
            type='primary'
          >
            {text.LOGIN}
          </Button>
        </ButtonContainer>
      </Form>
    </LogInContainer>
  );
}
