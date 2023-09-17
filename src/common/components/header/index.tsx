import s from './styles.module.css'
import {
    AiOutlineMenu,
    AiOutlineBell,
    AiOutlineUser
} from 'react-icons/ai'
import { Box, Button, IconButton, InputBase, Paper, Stack, TextField } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MenuButton from '../menu-button';

function Header() {
    return (
        <Box
            sx={{
                position: 'fixed',
                width: '100%',
                zIndex: 10
            }}
        >
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
                    >
                    Создать
                </Button>
            </Stack>

            <Stack direction="row">
                <IconButton arial-label="notifications" size="large">
                    <NotificationsNoneIcon />
                </IconButton>
                <Button
                    variant="text"
                    size="large"
                    startIcon={<PermIdentityIcon />}>
                    Войти
                </Button>
            </Stack>
        </Stack>
        </Box>
    )
}

export default Header;