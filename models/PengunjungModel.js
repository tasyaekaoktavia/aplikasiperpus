import mongoose from "mongoose";

const Pengunjung = mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    nohp : {
        type: String,
        required:true
    },
    alamat : {
        type: String,
        required:true
    },
    jeniskelamin : {
        type: String,
        required:true
    },
    
});

export default mongoose.model('Pengunjungs', Pengunjung);