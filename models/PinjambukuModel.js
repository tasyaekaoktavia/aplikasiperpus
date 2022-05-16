import mongoose from "mongoose";

const Pinjambuku = mongoose.Schema({
    tanggalpinjam : {
        type: String,
        required:true
    },
    tanggalkembali : {
        type: String,
        required:true
    },
    kodebuku : {
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
    nohppeminjam : {
        type: String,
        required:true
    }

});

export default mongoose.model('Pinjambukus', Pinjambuku);