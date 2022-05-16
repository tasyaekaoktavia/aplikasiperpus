import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Daftarbuku = () => {
    const [daftarbuku, setDaftarbuku] =  useState([]);

    useEffect(()=>{
        getDaftarbukus();
    },[]);

    const getDaftarbukus = async() =>{
        const response = await axios.get('http://localhost:5000/daftarbukus');
        setDaftarbuku(response.data);
    };

    const deleteDaftarbuku = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/daftarbukus/${id}`);
        getDaftarbukus();
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div id="body-pd">
                <Header/>
                   <Sidebar/>
            <div class="">
              <Link to="/daftarbuku/adddaftarbuku" className='btn btn-success mt-3 mb-3'>Tambah Daftar Buku</Link>
    <table class="table ">
  <thead class="thead-dark">
    <tr>
     <th scope="col">No</th>
      <th scope="col">Kode Buku</th>
      <th scope="col">Judul Buku</th>
      <th scope="col">Penulis Buku</th>
      <th scope="col">Penerbit Buku</th>
      <th scope="col">Tahun Terbit</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
      {daftarbuku.map((daftarbuku, index) => (
          <tr key={daftarbuku._id}>
          <th>{index + 1}</th>
          <td>{daftarbuku.kodebuku}</td>
          <td>{daftarbuku.judulbuku}</td>
          <td>{daftarbuku.penulisbuku}</td>
          <td>{daftarbuku.penerbitbuku}</td>
          <td>{daftarbuku.tahunterbit}</td>
          <td>
              <Link to={`editdaftarbuku/${daftarbuku._id}`} className='button btn btn-primary mr-2'>Edit</Link>
              <button onClick={() => deleteDaftarbuku(daftarbuku._id)} className='button btn btn-danger'>Delete</button>
          </td>
        </tr>
      ))}
    
  </tbody>
</table>
                </div>
                  </div>
  )
}

export default Daftarbuku