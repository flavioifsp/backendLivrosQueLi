// import { prisma } from "../../prisma.js";

// /**
//  * 
//  * @param {import("express").Request} req 
//  * @param {import("express").Response} res 
//  */
// export default async function editar(req, res) {
//     const { id } = req.params;
//     const { nome, imagem, selecionado } = req.body;
    
//     try {
//         const livro = await prisma.livro.update({
//             where: { id: Number(id) },
//             data: {
//                 nome,
//                 imagem,
//                 selecionado
//             },
//         });

//         res.json(livro);    

//     } catch (error) {
//         res.json({ error: error.message });
//     }
// }