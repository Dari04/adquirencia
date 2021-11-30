import { ReactElement } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
// layouts
import Layout from '../src/layouts';
// components
import { Page, Image } from '../src/components';
// images
import maintenanceIllustration from '../public/static/illustrations/illustration_maintenance.svg';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(15, 2.5),
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
  },
}));

// ----------------------------------------------------------------------

export default function MaintenancePage() {
  return (
    <Page title="Maintenance">
      <RootStyle>
        <Box sx={{ maxWidth: 480 }}>
          <Typography variant="h3" paragraph>
            Website Currently Under Maintenance
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            We are currently working hard on this page!
          </Typography>

          <Image
            alt="maintenance"
            src={maintenanceIllustration}
            layout="intrinsic"
            placeholder="blur"
            sx={{
              mx: 'auto',
              maxWidth: 320,
              my: { xs: 6, sm: 8 },
            }}
          />

          <NextLink href="/">
            <Button size="large" variant="contained">
              Go to Home
            </Button>
          </NextLink>
        </Box>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MaintenancePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};
