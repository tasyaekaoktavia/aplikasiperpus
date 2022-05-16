import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pinjambuku = () => {
    const [pinjambuku, setPinjambuku] =  useState([]);

    useEffect(()=>{
        getPinjambuku();
    },[]);

    const getPinjambuku = async() =>{
        const response = await axios.get('http://localhost:5000/pinjambukus');
        setPinjambuku(response.data);
    };

    const deletePinjambuku = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/pinjambukus/${id}`);
        getPinjambuku();
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div id="body-pd">
                <Header/>
                   <Sidebar/>
            <div class="">
              <Link to="/pinjambuku/addpinjambuku" className='btn btn-success mt-3 mb-3'>Tambah Peminjam</Link>
    <table class="table ">
  <thead class="thead-dark">
    <tr>
    <th scope="col">No</th>
      <th scope="col">Tanggal Pinjam</th>
      <th scope="col">Tanggal Pengembalian</th>
      <th scope="col">Kode Buku</th>
      <th scope="col">Judul Buku</th>
      <th scope="col">Nama Peminjam</th>
      <th scope="col">No Hp Peminjam</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
      {pinjambuku.map((pinjambuku, index) => (
          <tr key={pinjambuku._id}>
          <th>{index + 1}</th>
          <td>{pinjambuku.tanggalpinjam}</td>
          <td>{pinjambuku.tanggalkembali}</td>
          <td>{pinjambuku.kodebuku}</td>
          <td>{pinjambuku.judulbuku}</td>
          <td>{pinjambuku.peminjam}</td>
          <td>{pinjambuku.nohppeminjam}</td>
          <td>
              <Link to={`/pinjambuku/editpinjambuku/${pinjambuku._id}`} className='button btn btn-primary mr-2'>Edit</Link>
              <button onClick={() => deletePinjambuku(pinjambuku._id)} className='button btn btn-danger'>Delete</button>
          </td>
        </tr>
      ))}
    
  </tbody>
</table>
                </div>
                  </div>
  )
}

export default Pinjambuku