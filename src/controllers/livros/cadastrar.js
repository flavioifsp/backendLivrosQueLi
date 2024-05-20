import { prisma } from "../../prisma.js";
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export default function create(req, res) {
    try {
        console.log(req.body.name)
    } catch (error) {
        
    }

}