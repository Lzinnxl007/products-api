import fastify from "fastify"
import fastifyCors from "@fastify/cors"

const server = fastify()
server.register(fastifyCors)

server.get("/api", (req, reply) => {
    return "Hello World!"
})

server.listen({
    port: 3000,
}, () => {
    console.log("Server running...")
})