import useCategories from "@/common/hooks/useCategories";
import { IPostCategoryAndDate } from "@/common/types/IPostCategoryAndDate";
import dateFrom from "@/common/utils/dateFrom";
import { Avatar, Box, Button, Stack } from "@mui/material";

function PostCategoryAndDate({
    categoryValue, 
    date, 
    update
}: IPostCategoryAndDate) {

    const category = useCategories((state) =>
        state.categories.find(categories => categories.id === categoryValue)
    );

    const publishedTime = dateFrom(date);

    const updateTime = dateFrom(update);
    
    return(
        <>
        <Stack
            direction="row"
            sx={{
                p: '16px 16px 8px 16px',
                alignItems: 'center'
            }}
        >

            {category &&
                <Button
                    className="post-category"
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

            {update &&
                <Box
                    className="post-updated-time"
                >
                    обновлено {updateTime}
                </Box>
            }
        </Stack></>
    )
}
export default PostCategoryAndDate;