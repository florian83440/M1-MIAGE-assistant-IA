import express from 'express';
import { createAudio, getAudios } from '../controllers/audioController.js';

const router = express.Router();

router.post('/', createAudio);
router.get('/', getAudios);

export default router;