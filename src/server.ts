import express from "express"
import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "ola nlw 05"})
});

app.post("/users", (request, response) => {
    return response.json({ message: "usuario salvo com sucesso!"});
})

app.listen(3333, ()=>console.log("server rodando porta 3333"));
