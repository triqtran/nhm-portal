import { Tag as TagAnt, TagProps as TagAntProps } from 'antd';

export type TagProps = {} & TagAntProps;

export default function Tag({ children, ...props }: TagProps) {
  return <TagAnt {...props}>{children}</TagAnt>;
}
