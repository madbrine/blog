import PostH from "../post-h"
import PostImage from "../post-image"
import PostP from "../post-p"
import PostQ from "../post-q"

interface IProps {
    contentData: {
        type: string;
        data: string;
    }[]
}
function PostContent({contentData}: IProps) {
    return (
        <>

            {
                contentData.map((content, key) => {
                    return (
                        <>
                            {content.type === 'img' &&
                                <PostImage imageUrl={content.data} />
                            }
                            {content.type === 'h' &&
                                <PostH text={content.data} />
                            }
                            {content.type === 'q' &&
                                <PostQ text={content.data} />
                            }
                            {content.type === 'p' &&
                                <PostP text={content.data} />
                            }
                        </>
                    )
                })

            }
        </>
    )
}
export default PostContent;