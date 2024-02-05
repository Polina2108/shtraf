import postgres from "postgres";

export const sql = postgres({
    host: 'localhost',
    port: 5432,
    db: 'shtraf',
    username: 'postgres',
    password: '1111'
})