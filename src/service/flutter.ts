import { msLogger } from '../modules/logger';

export const wsRandomNumbers = async (ws: any, req: any) => {
    try {
        const object = {
            id: Math.random(),
            text: 'This is an Example'
        }
        while (true) {
            await sleep(5000);
            ws.send(JSON.stringify(object));
        };
    } catch (e) {
        msLogger.error(e.toString());
    };
};

const sleep = (ms: any) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};