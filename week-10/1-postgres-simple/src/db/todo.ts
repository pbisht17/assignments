import { client } from "../index";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    
    let query = `INSERT INTO todos(user_id, title, description) VALUES($1,$2,$3) RETURNING *`;
    let values = [userId, title, description];
    const result = await client.query(query, values);
    return result.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    let query = `UPDATE todos SET done = $1 WHERE id = $2 RETURNING *`;
    let values = [true, todoId];
    const result = await client.query(query, values);
    return result.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    let query = `SELECT * FROM todos`;
    const result = await client.query(query);
    return result.rows;
}