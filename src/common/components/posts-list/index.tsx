import s from './styles.module.css';
import { fakePostsData } from '@/common/utils/fakePostsData';
import PostCard from '../post-card';
import { useEffect, useState } from 'react';
import axios from 'axios';


function PostsList() {

    const fakeData = fakePostsData;


    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('/api/get-all-posts');
                if (response.status === 200) {
                    setPostData(response.data);
                    console.log(response.data);
                } else {
                    console.error('Error fetching post data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        };
        getData();
    }, []);

    return (
        <div className={s['container']}>
            {
                postData.map((post, key) => {
                    console.log(post)
                    return (
                        <PostCard data={post} key={key} />
                    )
                })
            }
        </div>
    );
}
export default PostsList;