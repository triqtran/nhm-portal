import { ButtonProps as BtnProps } from 'antd';
import { StyledButton } from './style';

export type ButtonProps = BtnProps;

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
