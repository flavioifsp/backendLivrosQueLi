import { prisma } from "../../prisma.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export default async function deletar(req, res) {
  const { id } = req.params;

  try {
    const livro = await prisma.livro.delete({
      where: { id: Number(id) },
    });

    res.json(livro);
  } catch (error) {
    res.json({ error: error.message });
  }
}
