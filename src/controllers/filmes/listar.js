import { prisma } from "../../prisma.js";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

export default async function listar(req, res) {
 
    
    try {
        const filme = await prisma.filme.findMany();
        res.json(filme);
        
        
    } catch (error) {
        res.json({ error: error.message });
    }
}