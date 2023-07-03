import { Spin, SpinProps } from 'antd';
import { LoadingContainer } from './style';

export type LoadingProps = {
  top?: number;
} & SpinProps;

export default function Loading({ top = 30, spinning = true }: LoadingProps) {
  return (
    <LoadingContainer top={top}>
      <Spin spinning={spinning} />
    </LoadingContainer>
  );
}
