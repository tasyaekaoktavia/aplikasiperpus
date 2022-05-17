import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
const EditKembalibuku = () => {
    const [tanggalkembali, setTanggakembali] = useState("");
    const [judulbuku, setJdudulbuku] = useState("");
    const [peminjam, setPeminjam] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getKembalibukuById();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 

      const getKembalibukuById = async () => {
        const response = await axios.get(`http://localhost:5000/kembalibukus/${id}`);
        setTanggakembali(response.data.tanggalkembali)
        setJdudulbuku(response.data.judulbuku)
        setPeminjam(response.data.peminjam)
    };

    const updateKembalibuku = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/kembalibukus/${id}`, {
                tanggalkembali,judulbuku,peminjam
            });
            navigate("/kembalibuku");
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div id="body-pd">
        <Header/>
       <Sidebar/>
<div class=" pt-5">
<Link to="/kembalibuku" className='btn btn-secondary mt-3 mb-3'> Kembali</Link>
<form onSubmit={updateKembalibuku}>
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
  <button type="submit" class="btn btn-primary mt-3">Update</button>
</form>
    </div>
    </div>
  )
}

export default EditKembalibuku