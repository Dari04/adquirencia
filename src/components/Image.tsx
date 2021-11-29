// next
import NextImage, { ImageProps } from 'next/image';
// @mui
import { styled } from '@mui/material/styles';
import { BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('span')(() => ({
  position: 'relative',
  display: 'block',
  lineHeight: 0,
  overflow: 'hidden',
  '& > span': {
    width: '100% !important',
    height: '100% !important',
    position: 'unset !important',
  },
}));

// ----------------------------------------------------------------------

type Props = ImageProps & BoxProps;

export default function Image({ width, height, src, sx, ...other }: Props) {
  return (
    <RootStyle sx={sx}>
      <NextImage
        layout="fill"
        objectFit="cover"
        src={src || '/static/images/placeholder.svg'}
        width={width}
        height={height}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
        {...other}
      />
    </RootStyle>
  );
}

const shimmer = (width?: string | number, height?: string | number) => `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="rgba(145, 158, 171, 0.24)" offset="20%" />
      <stop stop-color="rgba(145, 158, 171, 0.48)" offset="50%" />
      <stop stop-color="rgba(145, 158, 171, 0.24)" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="rgba(145, 158, 171, 0.24)" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
