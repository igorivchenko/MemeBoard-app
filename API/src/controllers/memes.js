import createHttpError from 'http-errors';
import { getAllMemes, updateMeme } from '../services/memes.js';

export const getMemesController = async (req, res) => {
  const memes = await getAllMemes();

  res.json({
    status: 200,
    message: 'Successfully found memes!',
    data: memes,
  });
};

export const updateMemesController = async (req, res) => {
  const { id } = req.params;

  const meme = await updateMeme(id, req.body);

  if (!meme) {
    throw createHttpError(404, 'Meme is not found');
  }

  res.json({
    status: 200,
    message: 'Meme is updated',
    data: meme,
  });
};
