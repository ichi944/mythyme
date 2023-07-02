import { prisma } from "$lib/server/prisma"

const db = new Map()

type Todo = {
    id: string,
    description: string,
    done: boolean,
}
type Todos= Todo[];

export async function getTodos(userId: string): Promise<Todos> {
    const todos = await prisma.todos.findMany({where: {user_id: userId}})
    return todos
}

export async function addTodo(
    userId: string,
    description: string | null,
): Promise<Todo> {
    if(!description) {throw new Error('No description provided')}
    const todos = getTodos(userId)
    const todo = {
        id: crypto.randomUUID(),
        description,
        done: false,
    }
    const result = await prisma.todos.create({data: {id: todo.id, description: todo.description, done: todo.done, user_id: userId}})
    return result
}
export async function toggleTodo(
    userId: string,
    todoId: string,
): Promise<void> {
    const current = await prisma.todos.findUniqueOrThrow({where: {id: todoId}})
    const todo = await prisma.todos.updateMany({where: {id: todoId, user_id: userId}, data: {done: !current.done}})
}

export function updateTodo(
    userId: string,
    todoId: string,
    description: string,
): void {
    
}

export async function deleteTodo(
    userId: string,
    todoId: string,
): Promise<void> {
    await prisma.todos.deleteMany({where: {id: todoId, user_id: userId}})
}


