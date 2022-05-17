import mongoose from "mongoose";

const Kembalibuku = mongoose.Schema({
    tanggalkembali : {
        type: String,
        required:true
    },
    judulbuku : {
        type: String,
        required:true
    },
    peminjam : {
        type: String,
        required:true
    },

});

export default mongoose.model('Kembalibukus', Kembalibuku);