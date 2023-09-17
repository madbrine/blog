import { Box, Stack } from "@mui/material";
import s from "./styles.module.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface IProps {
    text: string
}
function PostQ({ text }: IProps) {
    return (
        <Stack
            direction="row"
            sx={{
                mt: '32px',
                mb: '16px'
            }}
        >
            <FormatQuoteIcon fontSize="large"/>
            <Box className={s['container']}>
                {text}
            </Box>
        </Stack>
    )
}
export default PostQ;