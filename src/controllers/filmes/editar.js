import { prisma } from "../../prisma.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export default async function editar(req, res) {
  const { id } = req.params;
  const { nome, imagem } = req.body;

  try {
    const filmes = await prisma.filme.update({
      where: { id: Number(id) },
      data: {
        nome,
        imagem,
      },
    });

    res.json(filmes);
  } catch (error) {
    res.json({ error: error.message });
  }
}
