import { http } from "./http"
import "./websocket/client"
import "./websocket/admin"

// app.listen(3333, ()=>console.log("server rodando porta 3333"));
http.listen(3333, ()=>console.log("server rodando porta 3333"));







// nao usados mais
// app.get("/", (request, response) => {
//     return response.json({message: "ola nlw 05"})
// });

// app.post("/users", (request, response) => {
//     return response.json({ message: "usuario salvo com sucesso!"});
// })