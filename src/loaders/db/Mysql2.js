import config from '../../config/index.js';
import mysql2 from "mysql2/promise";

const pool = mysql2.createPool(config.mysql);

export default async (query) => {
    try {
        const conn = await pool.getConnection(async con => con)
        try {
            const [rows] = await conn.query(query);
            return rows;
        } catch(err) {
            return false;
        } finally {
            conn.release();
        }
    } catch(err) {
        return false;
    }
}