const db = new Map()

type Todo = {
    id: string,
    description: string,
    done: boolean,
}
type Todos= Todo[];

export function getTodos(userId: number): Todos {
    if(!db.get(userId)) {
        db.set(userId, [])
    }
    return db.get(userId) as Todos
}

export function addTodo(
    userId: number,
    description: string,
): Todo {
    const todos = getTodos(userId)
    const todo = {
        id: crypto.randomUUID(),
        description,
        done: false,
    }
    todos.push(todo)
    return todo
}
export function toggleTodo(
    userId: number,
    todoId: string,
): void {
    const todos = getTodos(userId)
    const todo = todos.find(todo => todo.id === todoId)
    if(todo) {
        todo.done = !todo.done
    }
}

export function updateTodo(
    userId: number,
    todoId: string,
    description: string,
): void {
    const todos = getTodos(userId)
    const todo = todos.find(todo => todo.id === todoId)
    if(todo) {
        todo.description = description
    }
}

export function deleteTodo(
    userId: number,
    todoId: string,
): void {
    const todos = getTodos(userId)
    const index = todos.findIndex(todo => todo.id === todoId)
    if(index !== -1) {
        todos.splice(index, 1)
    }
}

