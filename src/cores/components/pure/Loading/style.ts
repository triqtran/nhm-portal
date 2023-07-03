import styled from 'styled-components';

interface LoadingContainerProps {
  top: number;
}

export const LoadingContainer = styled.div<LoadingContainerProps>`
  margin: auto;
  margin-top: ${props => props.top}px;
`;
