import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, ()=>console.log("server rodando porta 3333"));







// nao usados mais
// app.get("/", (request, response) => {
//     return response.json({message: "ola nlw 05"})
// });

// app.post("/users", (request, response) => {
//     return response.json({ message: "usuario salvo com sucesso!"});
// })