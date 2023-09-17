import { IPostImage } from "@/common/types/IPostImage";
import { Box } from "@mui/material";
import Image from "next/image";

function PostImage({imageUrl}: IPostImage) {
    return(
        <>
        {imageUrl &&
        <Box
            className="post-image"
        >
            <Image
                alt="postImage"
                src={imageUrl}
                layout='responsive'
                width={640}
                height={1}
                objectFit='contain'
            />
        </Box>
        }
        </>
    )
}
export default PostImage;