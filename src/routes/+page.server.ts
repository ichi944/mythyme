import type { PageServerLoad, Actions } from "./$types"
import { getTodos, addTodo, deleteTodo } from "$lib/server/database"

export const load: PageServerLoad = ({ cookies }) => {
    const userId = cookies.get('userId')
    if (!userId) {
        cookies.set('userId', crypto.randomUUID(), { path: '/' })
    }

    const todos = getTodos(userId)

    return { todos }
}


export const actions: Actions = {
    create: async ({cookies, request}) => {
        console.log(request)
        const userId = cookies.get('userId')
        const data = await request.formData()
        addTodo(userId, data.get('description'))
    },
    delete: async ({cookies, request}) => {
        const userId = cookies.get('userId')
        const data = await request.formData()
        deleteTodo(userId, data.get('id'))
    }
}
