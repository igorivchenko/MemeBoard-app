import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import {
  getMemesController,
  updateMemesController,
} from '../controllers/memes.js';
import { updateMemeSchema } from '../validation/memes.js';

const router = Router();

router.get('/', ctrlWrapper(getMemesController));

router.patch(
  '/:id',
  isValidId,
  validateBody(updateMemeSchema),
  ctrlWrapper(updateMemesController),
);

export default router;
