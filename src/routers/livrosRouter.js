import { Router } from "express";
import create from "../controllers/livros/cadastrar.js";
import listar from "../controllers/livros/listar.js";


const routerLivros = Router()

routerLivros.post("/", create)
routerLivros.get("/", listar)

export default routerLivros
