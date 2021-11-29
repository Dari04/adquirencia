import { m, MotionValue } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Button, Stack, Typography, Box } from '@mui/material';
// hooks
import { useHoverParallax, useResponsive } from '../../hooks';
// components
import { Image } from '../../components';
// images
import screen01 from '../../../public/static/images/home/advertisement_screen01.png';
import screen02 from '../../../public/static/images/home/advertisement_screen02.png';
import screen03 from '../../../public/static/images/home/advertisement_screen03.png';
import screen04 from '../../../public/static/images/home/advertisement_screen04.png';
import screen05 from '../../../public/static/images/home/advertisement_screen05.png';
import screen06 from '../../../public/static/images/home/advertisement_screen06.png';
import screen07 from '../../../public/static/images/home/advertisement_screen07.png';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 9,
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2.5),
  color: theme.palette.common.white,
}));

const BackgroundStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    zIndex: 8,
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.8),
  },
}));

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  return (
    <RootStyle onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
      <ContentStyle>
        <Typography variant="h3" sx={{ opacity: 0.72 }}>
          Start Now
        </Typography>
        <Typography variant="h1" component="h2" sx={{ mt: 1, mb: 8 }}>
          Create Your
          <br /> Website Today
        </Typography>
        <Button size="large" variant="contained">
          Purchase Now
        </Button>
      </ContentStyle>
      <Background offsetX={offsetX} offsetY={offsetY} />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type BackgroundProps = {
  offsetX: (force: number) => MotionValue<number>;
  offsetY: (force: number) => MotionValue<number>;
};

function Background({ offsetX, offsetY }: BackgroundProps) {
  const isDesktop = useResponsive('up', 'sm');

  const boxStyle = { position: 'absolute', top: 0, width: 1, height: 1 } as const;

  const imageStyle = {
    width: 1440,
    height: !isDesktop ? 2000 : 912,
    layout: 'responsive',
  } as const;

  return (
    <BackgroundStyle>
      <m.div style={{ x: offsetX(16), y: offsetY(16) }}>
        <Image src={screen07} alt="screen-07" {...imageStyle} />
      </m.div>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(24), y: offsetY(24) }}>
          <Image alt="screen-06" src={screen06} {...imageStyle} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ y: offsetY(20) }}>
          <Image alt="screen-05" src={screen05} {...imageStyle} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(-20), y: offsetY(-20) }}>
          <Image alt="screen-04" src={screen04} {...imageStyle} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ y: offsetY(20) }}>
          <Image alt="screen-03" src={screen03} {...imageStyle} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(-48), y: offsetY(8) }}>
          <Image alt="screen-02" src={screen02} {...imageStyle} />
        </m.div>
      </Box>

      <Box sx={{ ...boxStyle }}>
        <m.div style={{ x: offsetX(20), y: offsetY(20) }}>
          <Image alt="screen-01" src={screen01} {...imageStyle} />
        </m.div>
      </Box>
    </BackgroundStyle>
  );
}
