import { type ForwardRefExoticComponent } from 'react';
import InternalButton, { type ButtonProps } from './Button';
import ButtonLoading from './ButtonLoading';

type CompoundedComponent = ForwardRefExoticComponent<ButtonProps> & {
  Loading: typeof ButtonLoading;
};

const Button = InternalButton as CompoundedComponent;
Button.Loading = ButtonLoading;

export default Button;
