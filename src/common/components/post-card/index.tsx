import s from './styles.module.css'
import useCategories from "@/common/hooks/useCategories";
import { ICategory } from "@/common/types/ICategory";
import { IPostData } from "@/common/types/IPostData";
import dateFrom from "@/common/utils/dateFrom";
import { Avatar, Button, Link, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from 'next/image';
import PostCategoryAndDate from '../post-category-and-date';
import PostHeader from '../post-header';
import PostImage from '../post-image';
import PostIndicators from '../post-indicators';

interface IProps {
    data: IPostData
}
function PostCard({ data }: IProps) {

    return (
        <Box
            sx={{
                mt: '32px'
            }}
        >
            <Paper>
                <PostCategoryAndDate
                    categoryValue={data.category}
                    date={data.date}
                    update={data.updateDate}
                />

                <Link
                    href={`/publication/${data.id}`}
                    underline="none"
                    color="black"
                >
                    <PostHeader
                        header={data.header}
                        description={data.description}
                    />
                    <PostImage
                        imageUrl={data.imageUrl}
                    />
                </Link>
                <PostIndicators
                    likes={data.likes}
                    comments={data.comments}
                    views={data.views}
                />
            </Paper>
        </Box>
    )
}
export default PostCard;