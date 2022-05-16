import express from "express";
import {
    getDaftarbukus,
    getDaftarbukuById,
    saveDaftarbuku,
    updateDaftarbuku,
    deleteDaftarbuku
} from "../controllers/DaftarbukuController.js";

const router = express.Router();

router.get('/daftarbukus', getDaftarbukus);
router.get('/daftarbukus/:id', getDaftarbukuById);
router.post('/daftarbukus', saveDaftarbuku);
router.patch('/daftarbukus/:id', updateDaftarbuku);
router.delete('/daftarbukus/:id', deleteDaftarbuku);

export default router;