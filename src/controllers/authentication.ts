import { loginJWT } from '../service/authentication';
export const API = [
    {
        config: {
            METHOD: "POST",
            VERSION: 1
        },
        method: loginJWT
    },
]