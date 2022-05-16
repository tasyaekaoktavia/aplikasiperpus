import Daftarbuku from "../models/DaftarbukuModel.js";

export const getDaftarbukus = async (req, res) => {
    try {
        const daftarbukus = await Daftarbuku.find();
        res.json(daftarbukus);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getDaftarbukuById = async (req, res) => {
    try {
        const daftarbuku = await Daftarbuku.findById(req.params.id);
        res.json(daftarbuku);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveDaftarbuku = async (req, res) => {
    const daftarbuku = new Daftarbuku(req.body);
    try {
        const inserteddaftarbuku = await daftarbuku.save();
        res.status(201).json(inserteddaftarbuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateDaftarbuku = async (req, res) => {
    try {
        const updateddaftarbuku = await Daftarbuku.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateddaftarbuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteDaftarbuku = async (req, res) => {
    try {
        const deleteddaftarbuku = await Daftarbuku.deleteOne({_id:req.params.id});
        res.status(200).json(deleteddaftarbuku);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}