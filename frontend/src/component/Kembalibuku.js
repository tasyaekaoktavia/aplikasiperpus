import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Kembalibuku = () => {
    const [kembalibuku, setKembalibuku] =  useState([]);

    useEffect(()=>{
        getKembalibuku();
    },[]);

    const getKembalibuku = async() =>{
        const response = await axios.get('http://localhost:5000/kembalibukus');
        setKembalibuku(response.data);
    };

    const deleteKembalibuku = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/kembalibukus/${id}`);
        getKembalibuku();
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div id="body-pd">
                <Header/>
                   <Sidebar/>
            <div class="">
              <Link to="/kembalibuku/addkembalibuku" className='btn btn-success mt-3 mb-3'>Tambah Pengembalian Buku</Link>
    <table class="table ">
  <thead class="thead-dark">
    <tr>
    <th scope="col">No</th>
      <th scope="col">Tanggal Pengembalian</th>
      <th scope="col">Judul Buku</th>
      <th scope="col">Nama Peminjam</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
      {kembalibuku.map((kembalibuku, index) => (
          <tr key={kembalibuku._id}>
          <th>{index + 1}</th>
          <td>{kembalibuku.tanggalkembali}</td>
          <td>{kembalibuku.judulbuku}</td>
          <td>{kembalibuku.peminjam}</td>
          <td>
              <Link to={`/kembalibuku/editkembalibuku/${kembalibuku._id}`} className='button btn btn-primary mr-2'>Edit</Link>
              <button onClick={() => deleteKembalibuku(kembalibuku._id)} className='button btn btn-danger'>Delete</button>
          </td>
        </tr>
      ))}
    
  </tbody>
</table>
                </div>
                  </div>
  )
}

export default Kembalibuku