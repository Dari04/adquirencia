import { MDXRemoteSerializeResult } from 'next-mdx-remote';
// next
import dynamic from 'next/dynamic';
// @mui
import { Typography, Stack, Chip, Box } from '@mui/material';
// @utils
import { getBenefitIcon } from '../../../utils/getIcon';
// @types
import { JobProps } from '../../../@types/career';
// components
import { Markdown, TextIconLabel } from '../../../components';
//
const GoogleMap = dynamic(() => import('../../../components/map/GoogleMap'));

// ----------------------------------------------------------------------

type Props = {
  job: JobProps;
  content: MDXRemoteSerializeResult;
};

export default function CareerJobDetails({ job, content }: Props) {
  const { skills, otherBenefits, locationMap } = job;

  return (
    <Stack spacing={5}>
      <Markdown content={content} />

      {/* -- Skills -- */}
      <section>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Job Skills
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          {skills.map((skill) => (
            <Chip key={skill} label={skill} sx={{ m: 0.5 }} onClick={() => {}} />
          ))}
        </Stack>
      </section>

      {/* -- Other Benefits --- */}
      <section>
        <Typography variant="h4" paragraph>
          Other Benefits
        </Typography>
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {otherBenefits.map((benefit) => (
            <TextIconLabel key={benefit} icon={getBenefitIcon(benefit)} value={benefit} />
          ))}
        </Box>
      </section>

      {/* -- Location Map --- */}
      <section>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Location
        </Typography>
        <GoogleMap offices={locationMap} sx={{ borderRadius: 2, overflow: 'hidden' }} />
      </section>
    </Stack>
  );
}
