import Pinjambuku from "../models/PinjambukuModel.js";

export const getpinjambukus = async (req, res) => {
    try {
        const pinjambukus = await Pinjambuku.find();
        res.json(pinjambukus);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPinjambukuById = async (req, res) => {
    try {
        const pinjambuku = await Pinjambuku.findById(req.params.id);
        res.json(pinjambuku);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const savePinjambuku = async (req, res) => {
    const pinjambuku = new Pinjambuku(req.body);
    try {
        const insertedpinjambuku = await pinjambuku.save();
        res.status(201).json(insertedpinjambuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePinjambuku = async (req, res) => {
    try {
        const updatedpinjambuku = await Pinjambuku.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedpinjambuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePinjambuku = async (req, res) => {
    try {
        const deletedpinjambuku = await Pinjambuku.deleteOne({_id:req.params.id});
        res.status(200).json(deletedpinjambuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}