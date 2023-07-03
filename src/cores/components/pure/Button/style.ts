import { Button } from 'antd';
import styled from 'styled-components';

interface StyledButtonProps {
  color?: string;
  background?: string;
}

export const StyledButton = styled(Button)<StyledButtonProps>``;
