import s from './styles.module.css';
import { fakePostsData } from '@/common/utils/fakePostsData';
import PostItem from '../post-item';


function PostsList() {

    const data = fakePostsData;

    return (
        <div className={s['container']}>
            {
                data.map(post => {
                    console.log(post)
                    return (
                        <PostItem data={post} key={post.id}/>
                    )
                }
                )
            }
        </div>
    );
}
export default PostsList;