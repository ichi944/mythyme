import { error } from "@sveltejs/kit"
import type { PageServerLoad, Actions } from "./$types"
import { getTodos, addTodo, deleteTodo } from "$lib/server/database"

export const load: PageServerLoad = ({ cookies }) => {
    let userId = cookies.get('userId')
    if (!userId) {
        userId = crypto.randomUUID()
        cookies.set('userId', userId, { path: '/' })
    }

    const todos = getTodos(userId)

    return { todos }
}

export const actions: Actions = {
    create: async ({cookies, request}) => {
        console.log(request)
        const userId = cookies.get('userId')
        if(!userId) { throw error(404, 'Not Found') }
        const data = await request.formData()
        const description = data.get('description') as string
        addTodo(userId, description)
    },
    delete: async ({cookies, request}) => {
        const userId = cookies.get('userId')
        if(!userId) { throw error(404, 'Not Found') }
        const data = await request.formData()
        deleteTodo(userId, data.get('id'))
    }
}
