import { wsRandomNumbers } from '../service/flutter';

export const API = [
    {
        config: {
            METHOD: "WS",
            VERSION: 1
        },
        method: wsRandomNumbers
    },
]