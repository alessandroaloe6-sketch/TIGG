import express from 'express';
import { getAllWaitingGames } from '../db/database.js';

const router = express.Router();

/**
 * @swagger
 * /lobby:
 *   get:
 *     summary: Lista partite in attesa (pubblica, senza autenticazione)
 *     tags: [Lobby]
 *     responses:
 *       200:
 *         description: Lista partite disponibili
 */
router.get('/', (req, res) => {
  try {
    const games = getAllWaitingGames();
    res.json({ games });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
