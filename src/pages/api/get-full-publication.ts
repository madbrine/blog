import { NextApiRequest, NextApiResponse } from 'next';
import { getPostById } from '@/common/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const postId = req.body.fetchData as string;
            console.log('id is ' + JSON.stringify(postId, null, 2));
            const data = getPostById(Number(postId));
            console.log(data)
            res.status(200).json(data); 
        } catch (error) {
            console.error('Error fetching posts:', error);
            res.status(500).json({ error: 'Error fetching posts' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}