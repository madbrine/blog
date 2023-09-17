import { Box, Button, Stack } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { IPostIndicators } from "@/common/types/IPostIndicators";

function PostIndicators({
    likes,
    comments,
    views
}: IPostIndicators) {
    return (
        <Stack
            direction="row"
            sx={{
                alignItems: 'center',
                pb: '8px'
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
                    {likes}
                </Button>
            </Box>
            {comments &&
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
                        {comments}
                    </Button>
                </Box>
            }
            <Box
                className="post-views"
            >
                {views} просмотров
            </Box>
        </Stack>

    )
}
export default PostIndicators