import { IPostFullData } from "@/common/types/IPostFullData";
import { Box, Paper, Stack } from "@mui/material";
import Commentaries from "../commentaries";
import PostCategoryAndDate from "../post-category-and-date";
import PostContent from "../post-content";
import PostH from "../post-h";
import PostHeader from "../post-header";
import PostImage from "../post-image";
import PostIndicators from "../post-indicators";
import PostP from "../post-p";
import PostQ from "../post-q";
import s from './styles.module.css'

interface IProps {
    data: IPostFullData
}
function Publication({ data }: IProps) {
    return (
        <Box
            className={s['container']}
        >
            <Paper
                className="publication-container"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <Stack
                    sx={{
                        width: '640px'
                    }}
                >
                    <PostCategoryAndDate
                        categoryValue={data.category}
                        date={data.date}
                        update={data.updateDate}
                    />
                    <PostHeader
                        header={data.header}
                        description={data.description}
                    />
                    <PostImage
                        imageUrl={data.imageUrl}
                    />
                    {data.content &&
                        <PostContent
                            contentData={data.content}
                        />
                    }
                    <PostIndicators
                        likes={data.likes}
                        views={data.views}
                    />
                </Stack>
            </Paper>
            <Paper
                className="publication-container"
            >
                <Box
                    className={s['commentaries-container']}
                >
                    {data.commentaries &&
                        <Commentaries
                            value={data.comments}
                            comments={data.commentaries}
                        />
                    }
                </Box>
            </Paper>
        </Box >
    )
}
export default Publication;