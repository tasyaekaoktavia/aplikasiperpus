import Kembalibuku from "../models/KembalibukuModel.js";

export const getkembalibukus = async (req, res) => {
    try {
        const kembalibukus = await Kembalibuku.find();
        res.json(kembalibukus);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getKembalibukuById = async (req, res) => {
    try {
        const kembalibuku = await Kembalibuku.findById(req.params.id);
        res.json(kembalibuku);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveKembalibuku = async (req, res) => {
    const kembalibuku = new Kembalibuku(req.body);
    try {
        const insertedkembalibuku = await kembalibuku.save();
        res.status(201).json(insertedkembalibuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateKembalibuku = async (req, res) => {
    try {
        const updatedkembalibuku = await Kembalibuku.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedkembalibuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteKembalibuku = async (req, res) => {
    try {
        const deletedkembalibuku = await Kembalibuku.deleteOne({_id:req.params.id});
        res.status(200).json(deletedkembalibuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}