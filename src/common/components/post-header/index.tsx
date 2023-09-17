import { IPostHeader } from "@/common/types/IPostHeader";
import { Box, Stack } from "@mui/material";

function PostHeader({header, description}: IPostHeader) {
    return(
        <Stack
            sx={{
                p: '0px 24px 16px 16px'
            }}
        >
            <Box className="post-header">
                {header}
            </Box>
            <Box className="post-description">
                {description}
            </Box>
        </Stack>
    )
}
export default PostHeader;