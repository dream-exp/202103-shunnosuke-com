import { NextApiRequest, NextApiResponse } from 'next';
import worksJSON from 'data/works/index.json';

// @ts-ignore
const getWorks = (req:NextApiRequest, res:NextApiResponse) => {
   res.json(
      worksJSON
  );
}

export default getWorks;