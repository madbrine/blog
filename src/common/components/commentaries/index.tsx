import { ICommentaries } from "@/common/types/ICommentaries";
import { Paper } from "@mui/material";
import PostH from "../post-h";

function Commentaries({ value, comments }: ICommentaries) {
    return(
            <PostH text={`${value} комментариев`} />
    )
}
export default Commentaries;