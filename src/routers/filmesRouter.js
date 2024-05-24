import { Router } from "express";
import create from "../controllers/filmes/cadastrar.js";
import listar from "../controllers/filmes/listar.js";


const router = Router()

router.post("/", create)
router.get("/", listar)

export default router
