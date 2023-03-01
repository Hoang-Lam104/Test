import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onSignIn = () => {
    navigate('/home')
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-content">
        <Title className="sign-in-title">Sign In</Title>
        <Form form={form} onFinish={onSignIn}>
          <div>Usename</div>
          <Form.Item name="username">
            <Input className="sign-in-input"></Input>
          </Form.Item>
          
          <Form.Item>
            <Button className="sign-in-button" htmlType="submit">
                Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
