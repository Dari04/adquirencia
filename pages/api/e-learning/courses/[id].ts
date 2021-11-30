import { NextApiResponse } from 'next';
// _data
import { _courses } from '../../../../_data/mock';

// ----------------------------------------------------------------------

type Props = {
  query: {
    id: string;
  };
};

export default function handler({ query: { id } }: Props, res: NextApiResponse) {
  const filtered = _courses.find((course) => course.id === id);

  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Course with id: ${id} not found.` });
  }
}
