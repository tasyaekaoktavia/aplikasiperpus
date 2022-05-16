import Pengunjung from "../models/PengunjungModel.js";

export const getPengunjungs = async (req, res) => {
    try {
        const pengunjungs = await Pengunjung.find();
        res.json(pengunjungs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPengunjungById = async (req, res) => {
    try {
        const pengunjung = await Pengunjung.findById(req.params.id);
        res.json(pengunjung);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const savePengunjung = async (req, res) => {
    const pengunjung = new Pengunjung(req.body);
    try {
        const insertedpengunjung = await pengunjung.save();
        res.status(201).json(insertedpengunjung);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePengunjung = async (req, res) => {
    try {
        const updatedpengunjung = await Pengunjung.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedpengunjung);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePengunjung = async (req, res) => {
    try {
        const deletedpengunjung = await Pengunjung.deleteOne({_id:req.params.id});
        res.status(200).json(deletedpengunjung);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}