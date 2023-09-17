import { Box, Stack } from "@mui/material";

interface IProps {
    text: string
}
function PostP({ text }: IProps) {
    return (
        <Box
            sx={{
                mb: '16px'
            }}
            className="post-description"
        >
                {text}
        </Box>
    )
}
export default PostP;