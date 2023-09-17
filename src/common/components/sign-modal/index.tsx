import useAuthorization from '@/common/hooks/useAuthorization';
import { network } from '@/common/utils/network';
import { Box, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import s from './styles.module.css';

function SignModal() {

    const [isLogin, setLogin] = useState('');
    const [isPassword, setPassword] = useState('');

    const openModal = useAuthorization((state) => state.modal)
    const setModal = useAuthorization((state) => state.setModal)
    const setAuth = useAuthorization((state) => state.signIn);
    const signIn = async () => {
        try {
            const success = await network.signIn({
                login: isLogin,
                password: isPassword
            });

            if (success) {
                setModal();
                setAuth(success);
            } else {
                // Обработка неуспешного входа
            }
        } catch (error) {
            // Обработка ошибки при выполнении входа
            console.error(error);
        }
    }
    return (
        <>
        {openModal &&
        <Box className={s['container']}>
            <Paper className={s['paper']}>
                <Box className={s['header']}>
                    Привет!
                </Box>
                <TextField
                    label="Логин"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        mt: '16px'
                    }}
                    value={isLogin}
                    onChange={(e) => {
                        setLogin(e.target.value);
                    }}
                />
                <TextField
                    label="Пароль"
                    variant="outlined"
                    type={"password"}
                    sx={{
                        width: '100%',
                        mt: '16px'
                    }}
                    value={isPassword}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <Button
                    size="large"
                    sx={{
                        width: '100%',
                        mt: '16px',
                        textTransform: "none"
                    }}
                    onClick={signIn}
                >
                    Войти
                </Button>
            </Paper>
        </Box>
        }
        </>
    )
}
export default SignModal;