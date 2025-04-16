import { MemesCollection } from '../db/models/meme.js';

export const getAllMemes = async () => {
  const memes = MemesCollection.find();
  return memes;
};

export const updateMeme = (id, memeData) => {
  return MemesCollection.findByIdAndUpdate(id, memeData, {
    new: true,
  });
};
