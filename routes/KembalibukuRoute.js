import express from "express";
import {
    getkembalibukus,
    getKembalibukuById,
    saveKembalibuku,
    updateKembalibuku,
    deleteKembalibuku
} from "../controllers/KembalibukuController.js";

const router = express.Router();

router.get('/kembalibukus', getkembalibukus);
router.get('/kembalibukus/:id', getKembalibukuById);
router.post('/kembalibukus', saveKembalibuku);
router.patch('/kembalibukus/:id', updateKembalibuku);
router.delete('/kembalibukus/:id', deleteKembalibuku);

export default router;