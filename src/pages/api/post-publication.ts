import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'; // Импортируйте Axios
import { addPost } from '../../common/db';

export default async function postPublication(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const postData = req.body;
            addPost(postData); // Вызов функции для добавления поста
            res.status(200).json({ message: 'Post published successfully' });
        } catch (error) {
            console.error('SERVER Error publishing post:', error);
            res.status(500).json({ error: 'Error publishing post' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}