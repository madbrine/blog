import axios from "axios";
import useAuthorization from "../hooks/useAuthorization";
import { ISignIn } from "../types/INetwork";

export const network = {
    signIn: async (data: ISignIn) => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username: data.login,
                password: data.password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
            localStorage.setItem('token', response.data.token);

            return response.data.token;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};