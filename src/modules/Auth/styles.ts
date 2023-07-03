import { Typography } from 'antd';
import styled from 'styled-components';

export const LogInContainer = styled.div`
  width: 600px;
  margin: auto;
  margin-top: 100px;
`;

export const LogInTitle = styled.h1`
  font-weight: 600;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const ErrorText = styled(Typography.Text)`
  padding-bottom: 20px;
  display: block;
`;
