import { prisma } from "../../prisma.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export default async function deletar(req, res) {
  const { id } = req.params;

  try {
    const filmes = await prisma.filme.delete({
      where: { id: Number(id) },
    });

    res.json(filmes);
  } catch (error) {
    res.json({ error: error.message });
  }
}
