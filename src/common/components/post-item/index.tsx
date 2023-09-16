import s from './styles.module.css'
import useCategories from "@/common/hooks/useCategories";
import { ICategory } from "@/common/types/ICategory";
import { IPostsData } from "@/common/types/IPostsData";
import dateFrom from "@/common/utils/dateFrom";
import { Avatar, Button, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

interface IProps {
    data: IPostsData
}
function PostItem({ data }: IProps) {

    const category = useCategories((state) =>
        state.categories.find(obj => obj.id === data.id)
    );

    const publishedTime = dateFrom(data.date);

    const updateTime = dateFrom(data.update)
    return (
        <Box
            sx={{
                mt: '32px'
            }}
        >
            <Paper>
                <Stack
                    direction="row"
                    sx={{
                        p: '16px 16px 8px 16px',
                        alignItems: 'center'
                    }}
                >

                    {category &&
                        <Button
                            className={s['category']}
                            startIcon={
                                <Avatar 
                                    src={category.imageUrl}
                                    sx={{
                                        height: '24px',
                                        width: '24px',
                                    }}
                                />
                            }
                        >
                            {category.text}
                        </Button>
                    }
                    <Box
                        className="post-published-time"
                    >
                        {publishedTime}
                    </Box>

                    {data.update &&
                        <Box
                            className="post-updated-time"
                        >
                            обновлено {updateTime}
                        </Box>
                    }
                </Stack>
                <Stack
                    sx={{
                        p: '0px 24px 16px 16px'
                    }}
                >
                    <Box className="post-header">
                        {data.header}
                    </Box>
                    <Box className="post-description">
                        {data.description}
                    </Box>
                </Stack>
                <Box
                    className="post-image"
                >
                    <Image 
                        alt="postImage" 
                        src={data.imageUrl}
                        layout='responsive'
                        width={640}
                        height={1} 
                        objectFit='contain'
                    />
                </Box>
                <Stack
                    direction="row"
                    sx={{
                        alignItems: 'center',
                        p: '0px 16px 8px 16px'
                    }}
                >
                    <Box
                        className="post-views"
                    >
                        <Button
                            className="post-likes"
                            startIcon={
                                <FavoriteBorderIcon
                                    sx={{
                                        height: '24px',
                                        width: '24px',
                                    }}
                                />
                            }
                        >
                            {data.likes}
                        </Button>  
                    </Box>
                    <Box
                        className="post-comments"
                    >
                        <Button
                            className="post-likes"
                            startIcon={
                                <ChatBubbleOutlineIcon
                                    sx={{
                                        height: '24px',
                                        width: '24px',
                                    }}
                                />
                            }
                        >
                            {data.comments}
                        </Button>  
                    </Box>
                    <Box
                        className="post-views"
                    >
                        {data.views} просмотров
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}
export default PostItem;