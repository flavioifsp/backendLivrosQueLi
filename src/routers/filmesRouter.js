import { Router } from "express";
import create from "../controllers/filmes/cadastrar.js";


const router = Router()

router.post("/", create)

export default router
