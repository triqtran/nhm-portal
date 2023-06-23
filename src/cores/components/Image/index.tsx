import { ImageProps as ImgProps, Image as Img } from 'antd';

export type ImageProps = {} & ImgProps;

export default function Image({ ...props }: ImageProps) {
  return <Img />;
}
