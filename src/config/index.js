import dotenv from 'dotenv'
dotenv.config();

export default {
    server: {
        port: process.env.SERVER_PORT
    },
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT,
        dataStrings: true
    }
}