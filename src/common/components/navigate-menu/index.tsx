import useNavigateMenu from '@/common/hooks/useNavigateMenu';
import { Avatar, Box, Button, Stack } from '@mui/material';
import s from './styles.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import useCategories from '@/common/hooks/useCategories';

function NavigateMenu() {
    const isNavigateMenu: boolean = useNavigateMenu((state) => state.isOpen);
    console.log(isNavigateMenu)

    const categories = useCategories((state) => state.categories);

    return (
        <>
            {isNavigateMenu
                ?
                <Box className={s['box']}>
                <Stack
                    direction="column"
                    className={s['container']}
                >
                    <Stack
                        direction="column"
                        className={s['stack']}
                    >
                        <Box className={s['button-box']}>
                            <Button
                                className={s['button']}
                                startIcon={
                                    <AccessTimeIcon
                                        sx={{
                                            height: '24px',
                                            width: '24px',
                                        }}
                                    />
                                }
                            >
                                Свежее
                            </Button>
                        </Box>
                        <Box className={s['button-box']}>
                            <Button
                                className={s['button']}
                                startIcon={
                                    <WhatshotIcon
                                        sx={{
                                            height: '24px',
                                            width: '24px',
                                        }}
                                    />
                                }
                            >
                                Популярное
                            </Button>
                        </Box>
                    </Stack>
                    {categories &&
                        <Stack
                            direction="column"
                            className={s['stack']}
                        >
                            {
                                categories.map((category) => {
                                    return (
                                        <Box className={s['button-box']}>
                                            <Button
                                                className={s['button']}
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
                                        </Box>
                                    )
                                })
                            }
                        </Stack>
                    }
                </Stack>
                </Box>
                :
                <div className={s['empty-container']} />
            }
        </>
    )
}
export default NavigateMenu;