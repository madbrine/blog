import { Box, Button, IconButton, Input, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";
import s from "./styles.module.css";
import HPlusMobiledataIcon from '@mui/icons-material/HPlusMobiledata';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import ImageIcon from '@mui/icons-material/Image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ClearIcon from '@mui/icons-material/Clear';
import moment from "moment";
import { IPostFullData } from "@/common/types/IPostFullData";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

function NewPost() {

    const [isMainHeader, setMainHeader] = useState('')
    const [isMainDescription, setMainDescription] = useState('')
    const [isContent, setContent] = useState<{ type: 'h' | 'p' | 'q' | 'img'; data: string; }[]>([])

    const addH = () => {
        setContent([...isContent, {
            type: 'h',
            data: ''
        }])
    }
    const addP = () => {
        setContent([...isContent, {
            type: 'p',
            data: ''
        }])
    }
    const addQ = () => {
        setContent([...isContent, {
            type: 'q',
            data: ''
        }])
    }
    const addImg = () => {
        setContent([...isContent, {
            type: 'img',
            data: ''
        }])
    }

    let postData: IPostFullData = {
        id: 12,
        category: 1,
        date: moment().format("YYYY-MM-DD-HH-mm-ss"),
        update: '',
        header: isMainHeader,
        description: isMainDescription,
        imageUrl: '',
        views: 0,
        likes: 0,
        comments: 0,
        content: isContent,
    }

    const result = () => {
        console.log(postData)
    }


    const API_KEY = '6d207e02198a847aa98d0a2a901485a5';

    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0];
        if (selectedImage) {
            setImage(selectedImage);
        }
    };

    const handleUploadImage = async () => {
        if (!image) {
            console.error('Please select an image to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('key', API_KEY);
        formData.append('action', 'upload');
        formData.append('source', image);

        try {
            const response = await fetch('https://freeimage.host/api/1/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Image uploaded successfully:', data);
            } else {
                console.error('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }

    };

    return (

        <Box
            sx={{
                mt: "64px",
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Paper
                sx={{
                    width: "100%",
                    maxWidth: "688px",
                    pt: "16px",
                    pl: "16px",
                    pr: "16px"
                }}
            >
                <TextField
                    label="Оглавление"
                    multiline
                    variant="outlined"
                    className={s['text-field']}
                    sx={{
                        resize: {
                            fontSize: "22px"
                        }
                    }}
                    value={isMainHeader}
                    onChange={(e) => {
                        setMainHeader(e.target.value);
                    }}
                />
                <TextField
                    label="Описание"
                    multiline
                    variant="outlined"
                    className={s['text-field']}
                    value={isMainDescription}
                    onChange={(e) => {
                        setMainDescription(e.target.value);
                    }}
                />
                <Paper
                    className={s['upload-img']}
                    sx={{
                        p: 1,
                        bgcolor: "#f2f2f2"
                    }}
                >
                    <Input
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleImageChange}
                    />
                    <Button variant="contained" onClick={handleUploadImage}>
                        Upload Image
                    </Button>
                </Paper>

                {isContent.map((content, key) => {
                    return (
                        <>
                            {content.type === 'h' &&
                                <Stack direction="row">
                                    <TextField
                                        label="Заголовок"
                                        multiline
                                        variant="outlined"
                                        className={s['text-field']}
                                        value={isContent[key].data}
                                        onChange={(e) => {
                                            const updatedContent = [...isContent];
                                            updatedContent[key].data = e.target.value;
                                            setContent(updatedContent);
                                        }}
                                    />
                                    <IconButton
                                        arial-label="delete"
                                        onClick={() => {
                                            const updatedContent = [...isContent];
                                            updatedContent.splice(key, 1);
                                            setContent(updatedContent);
                                        }}
                                    >
                                        <ClearIcon />
                                    </IconButton>
                                </Stack>
                            }
                            {content.type === 'p' &&
                                <Stack direction="row">
                                    <TextField
                                        label="Параграф"
                                        multiline
                                        variant="outlined"
                                        className={s['text-field']}
                                        value={isContent[key].data}
                                        onChange={(e) => {
                                            const updatedContent = [...isContent];
                                            updatedContent[key].data = e.target.value;
                                            setContent(updatedContent);
                                        }}
                                    />
                                    <IconButton arial-label="delete"
                                        onClick={() => {
                                            const updatedContent = [...isContent];
                                            updatedContent.splice(key, 1);
                                            setContent(updatedContent);
                                        }}>
                                        <ClearIcon />
                                    </IconButton>
                                </Stack>
                            }
                            {content.type === 'q' &&
                                <Stack direction="row">
                                    <TextField
                                        label="Цитата"
                                        multiline
                                        variant="outlined"
                                        className={s['text-field']}
                                        value={isContent[key].data}
                                        onChange={(e) => {
                                            const updatedContent = [...isContent];
                                            updatedContent[key].data = e.target.value;
                                            setContent(updatedContent);
                                        }}
                                    />
                                    <IconButton arial-label="delete"
                                        onClick={() => {
                                            const updatedContent = [...isContent];
                                            updatedContent.splice(key, 1);
                                            setContent(updatedContent);
                                        }}>
                                        <ClearIcon />
                                    </IconButton>
                                </Stack>
                            }
                            {content.type === 'img' &&
                                <Stack direction="row">
                                    <Paper
                                        className={s['text-field']}
                                        sx={{
                                            p: 1,
                                            bgcolor: "gray"
                                        }}
                                    >
                                        загрузить фотографию
                                    </Paper>

                                    <IconButton arial-label="delete"
                                        onClick={() => {
                                            const updatedContent = [...isContent];
                                            updatedContent.splice(key, 1);
                                            setContent(updatedContent);
                                        }}>
                                        <ClearIcon />
                                    </IconButton>
                                </Stack>
                            }
                        </>
                    )
                })

                }

                <Stack
                >
                    <Button
                        startIcon={<HPlusMobiledataIcon />}
                        onClick={addH}
                    >
                        + заголовок
                    </Button>
                    <Button
                        startIcon={<FormatTextdirectionLToRIcon />}
                        onClick={addP}
                    >
                        + параграф
                    </Button>
                    <Button
                        startIcon={<FormatQuoteIcon />}
                        onClick={addQ}
                    >
                        + цитата
                    </Button>
                    <Button
                        startIcon={<ImageIcon />}
                        onClick={addImg}
                    >
                        + изображение
                    </Button>
                    <Button
                        onClick={result}
                    >
                        Опубликовать
                    </Button>
                </Stack>
            </Paper>
        </Box>
    )
}
export default NewPost;
