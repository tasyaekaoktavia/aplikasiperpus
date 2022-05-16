import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pengunjung = () => {
    const [pengunjung, setPengunjung] =  useState([]);

    useEffect(()=>{
        getPengunjungs();
    },[]);

    const getPengunjungs = async() =>{
        const response = await axios.get('http://localhost:5000/pengunjungs');
        setPengunjung(response.data);
    };

    const deletePengunjung = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/pengunjungs/${id}`);
        getPengunjungs();
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div id="body-pd">
                <Header/>
                   <Sidebar/>
            <div class="">
              <Link to="/pengunjung/addpengunjung" className='btn btn-success mt-3 mb-3'>Tambah Pengunjung</Link>
    <table class="table ">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama</th>
      <th scope="col">No Hp</th>
      <th scope="col">Jenis Kelamin</th>
      <th scope="col">Alamat</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
      {pengunjung.map((pengunjung, index) => (
          <tr key={pengunjung._id}>
          <th>{index + 1}</th>
          <td>{pengunjung.name}</td>
          <td>{pengunjung.nohp}</td>
          <td>{pengunjung.jeniskelamin}</td>
          <td>{pengunjung.alamat}</td>
          <td>
              <Link to={`/pengunjung/editpengunjung/${pengunjung._id}`} className='button btn btn-primary mr-2'>Edit</Link>
              <button onClick={() => deletePengunjung(pengunjung._id)} className='button btn btn-danger'>Delete</button>
          </td>
        </tr>
      ))}
    
  </tbody>
</table>
                </div>
                  </div>
  )
}

export default Pengunjung