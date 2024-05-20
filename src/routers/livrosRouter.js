import { Router } from "express";
import create from "../controllers/livros/cadastrar.js";


const routerLivros = Router()

routerLivros.post("/", create)

export default routerLivros
