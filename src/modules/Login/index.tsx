import { Button, Form, Input } from 'antd';
import text from 'constants/text';

export default function Login() {
  return (
    <div>
      <Form>
        <Form.Item
          rules={[
            { required: true, message: text.EMAIL_REQUIRED },
            { type: 'email', message: text.VALIDATE_EMAIL },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: text.PASSWORD_REQUIRED }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button>{text.LOGIN}</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
