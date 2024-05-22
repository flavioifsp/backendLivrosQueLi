import { prisma } from "../../prisma.js";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export default async function create(req, res) {
    
try {
    const livro = await prisma.livro.create(({ data: req.body }));

res.json(livro);    

} catch (error) {
    res.json({ error: error.message });
}
}