import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const EditDaftarbuku = () => {
    const [kodebuku, setKodebuku] = useState("");
    const [judulbuku, setJdudulbuku] = useState("");
    const [penulisbuku, serPenulisbuku] = useState("");
    const [penerbitbuku, setPenerbitbuku] = useState("");
    const [tahunterbit, setTahunterbit] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getDaftarbukuById();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 

      const getDaftarbukuById = async () => {
        const response = await axios.get(`http://localhost:5000/daftarbukus/${id}`);
        setKodebuku(response.data.kodebuku);
        setJdudulbuku(response.data.judulbuku)
        serPenulisbuku(response.data.penulisbuku)
        setPenerbitbuku(response.data.penerbitbuku)
        setTahunterbit(response.data.tahunterbit)
    };
  
    const updateDaftarbuku = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/daftarbukus/${id}`, {
                kodebuku,judulbuku,penulisbuku,penerbitbuku,tahunterbit
            });
            navigate("/daftarbuku");
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
<form onSubmit={updateDaftarbuku}>
  <div class="form-group">
    <label>Kode Buku</label>
    <input 
    type="field" 
    class="form-control" 
    value={kodebuku} 
    onChange={(e)=> setKodebuku(e.target.value)}
    placeholder="Enter Kode Buku"
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
    <label>Penulis Buku</label>
    <input 
    type="field" 
    class="form-control" 
    value={penulisbuku} 
    onChange={(e)=> serPenulisbuku(e.target.value)}
    placeholder="Penulis Buku"
    />
  </div>
  <div class="form-group">
    <label>Penerbit Buku</label>
    <input 
    type="field" 
    class="form-control" 
    value={penerbitbuku} 
    onChange={(e)=> setPenerbitbuku(e.target.value)}
    placeholder="Penerbit Buku"
    />
  </div>
  <div class="form-group">
    <label>Tahun Terbit</label>
    <input 
    type="field" 
    class="form-control" 
    value={tahunterbit} 
    onChange={(e)=> setTahunterbit(e.target.value)}
    placeholder="Tahun Terbit Buku"
    />
  </div>
  <button type="submit" class="btn btn-primary mt-3">Update</button>
</form>
    </div>
    </div>
  )
}

export default EditDaftarbuku