import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
const EditPinjambuku = () => {
    const [tanggalpinjam, setTanggalpinjam] = useState("");
    const [tanggalkembali, setTanggakembali] = useState("");
    const [kodebuku, setKodebuku] = useState("");
    const [judulbuku, setJdudulbuku] = useState("");
    const [peminjam, setPeminjam] = useState("");
    const [nohppeminjam, setNohppeminjam] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getPinjambukuById();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 

      const getPinjambukuById = async () => {
        const response = await axios.get(`http://localhost:5000/pinjambukus/${id}`);
        setTanggalpinjam(response.data.tanggalpinjam);
        setTanggakembali(response.data.tanggalkembali)
        setKodebuku(response.data.kodebuku)
        setJdudulbuku(response.data.judulbuku)
        setPeminjam(response.data.peminjam)
        setNohppeminjam(response.data.nohppeminjam)
    };

    const updatePinjambuku = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/pinjambukus/${id}`, {
                tanggalpinjam,tanggalkembali,kodebuku,judulbuku,peminjam,nohppeminjam
            });
            navigate("/pinjambuku");
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div id="body-pd">
        <Header/>
       <Sidebar/>
<div class=" pt-5">
<Link to="/daftarbuku" className='btn btn-secondary mt-3 mb-3'> Kembali</Link>
<form onSubmit={updatePinjambuku}>
  <div class="form-group">
    <label>Tanggal Pinjam</label>
    <input 
    type="field" 
    class="form-control" 
    value={tanggalpinjam} 
    onChange={(e)=> setTanggalpinjam(e.target.value)}
    placeholder="Tanggal Pinjam"
    />
  </div>
  <div class="form-group">
    <label>Tanggal Pengembalian</label>
    <input 
    type="field" 
    class="form-control" 
    value={tanggalkembali} 
    onChange={(e)=> setTanggakembali(e.target.value)}
    placeholder="Tanggal Pengembalian"
    />
  </div>
  <div class="form-group">
    <label>Kode Buku</label>
    <input 
    type="field" 
    class="form-control" 
    value={kodebuku} 
    onChange={(e)=> setKodebuku(e.target.value)}
    placeholder="Kode Buku"
    />
  </div>
  <div class="form-group">
    <label>Judul Buku</label>
    <input 
    type="field" 
    class="form-control" 
    value={judulbuku} 
    onChange={(e)=> setJdudulbuku(e.target.value)}
    placeholder="Judul Buku"
    />
  </div>
  <div class="form-group">
    <label>Nama Peminjam</label>
    <input 
    type="field" 
    class="form-control" 
    value={peminjam} 
    onChange={(e)=> setPeminjam(e.target.value)}
    placeholder="Nama Peminjam"
    />
  </div>
  <div class="form-group">
    <label>No Hp Peminjam</label>
    <input 
    type="field" 
    class="form-control" 
    value={nohppeminjam} 
    onChange={(e)=> setNohppeminjam(e.target.value)}
    placeholder="No Hp Peminjam"
    />
  </div>
  <button type="submit" class="btn btn-primary mt-3">Update</button>
</form>
    </div>
    </div>
  )
}

export default EditPinjambuku