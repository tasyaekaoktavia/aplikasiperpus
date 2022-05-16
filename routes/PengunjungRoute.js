import express from "express";
import {
    getPengunjungs,
    getPengunjungById,
    savePengunjung,
    updatePengunjung,
    deletePengunjung
} from "../controllers/PengunjungController.js";

const router = express.Router();

router.get('/pengunjungs', getPengunjungs);
router.get('/pengunjungs/:id', getPengunjungById);
router.post('/pengunjungs', savePengunjung);
router.patch('/pengunjungs/:id', updatePengunjung);
router.delete('/pengunjungs/:id', deletePengunjung);

export default router;