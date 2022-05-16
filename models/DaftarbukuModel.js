import mongoose from "mongoose";

const Daftarbuku = mongoose.Schema({
    kodebuku : {
        type: String,
        required:true
    },
    judulbuku : {
        type: String,
        required:true
    },
    penulisbuku : {
        type: String,
        required:true
    },
    penerbitbuku : {
        type: String,
        required:true
    },
    tahunterbit : {
        type: String,
        required:true
    }

});

export default mongoose.model('Daftarbukus', Daftarbuku);