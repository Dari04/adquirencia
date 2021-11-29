import { NextApiResponse } from 'next';
// _data
import { _jobs } from '../../../../_data/mock';

// ----------------------------------------------------------------------

type Props = {
  query: {
    id: string;
  };
};

export default function handler({ query: { id } }: Props, res: NextApiResponse) {
  const filtered = _jobs.find((job) => job.id === id);

  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Job with id: ${id} not found.` });
  }
}
