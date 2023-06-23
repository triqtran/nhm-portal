import { Button } from 'antd';
import styled from 'styled-components';

interface StyledButtonProps {
  color?: string;
  background?: string;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  color: ${props => props.theme.colors[props?.color!] || props.color};
  background-color: ${props => props.theme.colors[props?.background!] || props.background};
`;
