import { IPostFullData } from "@/common/types/IPostFullData";
import { Box, Paper } from "@mui/material";
import PostCategoryAndDate from "../post-category-and-date";
import PostHeader from "../post-header";
import PostImage from "../post-image";
import PostIndicators from "../post-indicators";

interface IProps {
    data: IPostFullData
}
function Publication({ data }: IProps) {
    return(
    <Box
        sx={{
            mt: '32px'
        }}
    >
        <Paper>
            <PostCategoryAndDate
                categoryValue={data.category}
                date={data.date}
                update={data.update}
            />
            <PostHeader
                header={data.header}
                description={data.description}
            />
            <PostImage
                imageUrl={data.imageUrl}
            />
            <PostIndicators
                likes={data.likes}
                comments={data.comments}
                views={data.views}
            />
        </Paper>
    </Box>
    )
}
export default Publication;