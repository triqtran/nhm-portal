import { type ButtonProps } from 'antd';
import { useState } from 'react';
import { StyledButton } from './style';

export type ButtonLoadingProps = {
  onClick: () => Promise<any>;
} & ButtonProps;

const ButtonLoading = ({ onClick, children, ...props }: ButtonLoadingProps) => {
  const [handling, setHandling] = useState(false);

  const handleClick = async () => {
    setHandling(true);
    return await onClick().finally(() => {
      setHandling(false);

      
    });
  };

  return (
    <StyledButton loading={handling} onClick={handleClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default ButtonLoading;
