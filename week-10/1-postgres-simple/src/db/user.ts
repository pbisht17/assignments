import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    
    let query = `INSERT INTO users(username, password, name) VALUES($1, $2, $3) RETURNING *`;
    return await client.query(query, [username, password, name])
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    
    let query = 'SELECT * FROM users WHERE id = $1';
    let res = await client.query(query, [userId]);
    return res.rows[0];
}
