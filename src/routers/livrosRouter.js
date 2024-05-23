import { Router } from "express";
import create from "../controllers/livros/cadastrar.js";
import listar from "../controllers/livros/listar.js";
import editar from "../controllers/livros/editar.js";


const routerLivros = Router()

routerLivros.post("/", create)
routerLivros.get("/", listar)
// routerLivros.put("/", editar)

export default routerLivros
