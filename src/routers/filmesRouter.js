import { Router } from "express";
import create from "../controllers/filmes/cadastrar.js";
import listar from "../controllers/filmes/listar.js";
import editar from "../controllers/filmes/editar.js";
import deletar from "../controllers/filmes/excluir.js";


const router = Router()

router.post("/", create)
router.get("/", listar)
router.delete("/:id", deletar);
router.put("/:id", editar);

export default router
