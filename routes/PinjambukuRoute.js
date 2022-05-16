import express from "express";
import {
    getpinjambukus,
    getPinjambukuById,
    savePinjambuku,
    updatePinjambuku,
    deletePinjambuku
} from "../controllers/PinjambukuController.js";

const router = express.Router();

router.get('/pinjambukus', getpinjambukus);
router.get('/pinjambukus/:id', getPinjambukuById);
router.post('/pinjambukus', savePinjambuku);
router.patch('/pinjambukus/:id', updatePinjambuku);
router.delete('/pinjambukus/:id', deletePinjambuku);

export default router;