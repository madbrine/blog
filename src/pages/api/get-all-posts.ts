import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPostsData } from '@/common/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const data = getAllPostsData();
            console.log('SUCCESS GET ALL POSTS')
            res.status(200).json(data); 
        } catch (error) {
            console.error('Error fetching posts:', error);
            res.status(500).json({ error: 'Error fetching posts' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
