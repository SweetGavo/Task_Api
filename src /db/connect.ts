import dotenv from 'dotenv';

const MONGO_URL = process.env.MONGO_URI;

const SERVER_PORT = process.env.PORT;

dotenv.config();

export const db = {
    mongo: {
        url : MONGO_URL 
    },
    server: {
        port: SERVER_PORT
    }
};