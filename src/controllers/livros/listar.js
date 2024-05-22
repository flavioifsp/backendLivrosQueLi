import { prisma } from "../../prisma.js";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

export default async function listar(req, res) {
 
    
    try {
        const livros = await prisma.livro.findMany();
        res.json(livros);
        
        
    } catch (error) {
        res.json({ error: error.message });
    }
}