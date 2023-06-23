import { ForwardRefExoticComponent } from 'react';
import { ButtonProps } from './Button';
import ButtonLoading from './ButtonLoading';
import InternalButton from './Button';

type CompoundedComponent = ForwardRefExoticComponent<ButtonProps> & {
  Loading: typeof ButtonLoading;
};

const Button = InternalButton as CompoundedComponent;
Button.Loading = ButtonLoading;

export default Button;
