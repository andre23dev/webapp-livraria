import express from "express";
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Database conectado!")
})

const app = express();

app.use(express.json())

const livros = [
    {id: 1, "titulo":"Programando em Python"},
    {id: 2, "titulo":"Criando banco de dados com MySQL"}
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
})

app.get("/livros", (req,res) => {
    res.status(200).json(livros);
})
app.get("/livros:id", (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro registrado. Obrigado!")
})

app.put("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete("livros/id", (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.json(livros);
    res.send(`Livro alterado com sucesso id: ${id}`);
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}
export default app