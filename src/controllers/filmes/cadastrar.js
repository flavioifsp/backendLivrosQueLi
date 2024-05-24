import { prisma } from "../../prisma.js";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export default async function create(req, res) {
    
try {
    const filme = await prisma.filme.create(({ data: req.body }));

res.json(filme);    

} catch (error) {
    res.json({ error: error.message });
}
}