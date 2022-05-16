import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import React,{useState,} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AddPengunjung = () => {
    const [name, setName] = useState("");
    const [nohp, setNokartu] = useState("");
    const [jeniskelamin, setJeniskelamin] = useState("Laki - Laki");
    const [alamat, setAlamat] = useState("");
    const navigate = useNavigate();

    const savePengunjung = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/pengunjungs', {
                name,nohp,jeniskelamin,alamat
            });
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div id="body-pd">
        <Header/>
       <Sidebar/>
<div class=" pt-5">
<Link to="/pengunjung" className='btn btn-secondary mt-3 mb-3'> Kembali</Link>
<form onSubmit={savePengunjung}>
  <div class="form-group">
    <label>Nama</label>
    <input 
    type="field" 
    class="form-control" 
    value={name} 
    onChange={(e)=> setName(e.target.value)}
    placeholder="Enter Nama"
    />
  </div>
  <div class="form-group">
    <label >No Hp</label>
    <input 
    type="field" 
    class="form-control" 
    value={nohp} 
    onChange={(e)=> setNokartu(e.target.value)}
    placeholder="No Hp"
    />
  </div>
  <div className='mt-2'>
  <label>Jenis Kelamin</label>
  <select 
  value={jeniskelamin} 
  onChange={(e)=> setJeniskelamin(e.target.value)}
  class="custom-select">
  <option value="Laki - Laki">Laki - Laki </option>
  <option value="Perempuan">Perempuan </option>
</select>
</div>
<div class="form-group">
    <label >Alamat</label>
    <input 
    type="field" 
    class="form-control" 
    value={alamat} 
    onChange={(e)=> setAlamat(e.target.value)}
    placeholder="Alamat"
    />
  </div>
  <button type="submit" class="btn btn-primary mt-3">Submit</button>
</form>
    </div>
    </div>
  )
}

export default AddPengunjung