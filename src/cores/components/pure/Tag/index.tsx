import { Tag as TagAnt, type TagProps as TagAntProps } from 'antd';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TagProps = {} & TagAntProps;

export default function Tag({ children, ...props }: TagProps) {
  return <TagAnt {...props}>{children}</TagAnt>;
}
