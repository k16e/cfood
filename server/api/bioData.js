export default defineEventHandler(async (event) => {
    const
        { name } = getQuery(event),
        { age } = await readBody(event)

    return { message: `Hello, ${name} and you're ${age} years old!` }
})