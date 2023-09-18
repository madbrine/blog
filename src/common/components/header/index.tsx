import s from './styles.module.css'
import { Box, Button, IconButton, InputBase, Paper, Stack, TextField } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MenuButton from '../menu-button';
import SignModal from '../sign-modal';
import useAuthorization from '@/common/hooks/useAuthorization';
import { useState } from 'react';
import { useRouter } from 'next/router';


function Header() {

    const router = useRouter();

    const setSignModal = useAuthorization((state) => state.setModal)
    const isAuth = useAuthorization((state) => state.auth)
    const signOut = useAuthorization((state) => state.signOut)
    
    const navigateNewPost = () => {
        router.push('/new-post');

    }
    return (
        <Box
            sx={{
                position: 'fixed',
                width: '100%',
                zIndex: 10
            }}
        >
            <SignModal />
            <Stack
                direction="row"
                className={s['container']}>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: 'center' }}
                >
                    <MenuButton />
                    <div className={s['logo']}>logo</div>
                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        width: '640px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Paper
                        component="form"
                        elevation={0}
                        sx={{
                            p: '4px 4px 4px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#b3d3f8',
                        }}
                    >
                        <InputBase
                            sx={{
                                width: '15pc',
                            }}
                            placeholder="Поиск"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton
                            type="button"
                            sx={{ p: '6px' }}
                            aria-label="search"
                            size="small"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<AddIcon />}
                        sx={{
                            height: '36px',
                            borderRadius: '6px',
                            bgcolor: '#fff',
                            color: '#595959'
                        }}
                        onClick={navigateNewPost}
                    >
                        Создать
                    </Button>
                </Stack>

                <Stack direction="row">
                    <IconButton arial-label="notifications" size="large">
                        <NotificationsNoneIcon />
                    </IconButton>
                    {isAuth ?
                        <Button
                            variant="text"
                            size="large"
                            startIcon={<PermIdentityIcon />}
                            onClick={setSignModal}>
                            Войти
                        </Button>
                        :
                        <Button
                            variant="text"
                            size="large"
                            startIcon={<PermIdentityIcon />}
                            onClick={signOut}>
                            Выйти
                        </Button>
                    }
                </Stack>
            </Stack>
        </Box>
    )
}

export default Header;