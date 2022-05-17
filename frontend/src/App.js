import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Dasboard from './component/Dasboard';

import Pengunjung from './component/Pengunjung';
import AddPengunjung from './component/AddPengunjung';
import EditPengunjung from './component/EditPengunjung';

import Daftarbuku from './component/Daftarbuku';
import AddDaftarbuku from './component/AddDaftarbuku';
import EditDaftarbuku from './component/EditDaftarbuku';

import Pinjambuku from './component/Pinjambuku';
import AddPinjambuku from './component/AddPinjambuku';
import EditPinjambuku from './component/EditPinjambuku';

import Kembalibuku from './component/Kembalibuku';
import AddKembalibuku from './component/AddKembalibuku';
import EditKembalibuku from './component/EditKembalibuku';

import './style.css';
import './main.js';
import './fontawesome/css/all.min.css';

function App(){
        return (
          <BrowserRouter>
            <div className=''>
             <Routes>
               <Route path='/' element={<Dasboard/>}/>
               <Route path='/pengunjung' element={<Pengunjung/>}/>
               <Route path='/pengunjung/addpengunjung' element={<AddPengunjung/>}/>
               <Route path='/pengunjung/editpengunjung/:id' element={<EditPengunjung/>}/>

               <Route path='/daftarbuku' element={<Daftarbuku/>}/>
               <Route path='/daftarbuku/adddaftarbuku' element={<AddDaftarbuku/>}/>
               <Route path='/daftarbuku/editdaftarbuku/:id' element={<EditDaftarbuku/>}/>

               <Route path='/pinjambuku' element={<Pinjambuku/>}/>
               <Route path='/pinjambuku/addpinjambuku' element={<AddPinjambuku/>}/>
               <Route path='/pinjambuku/editpinjambuku/:id' element={<EditPinjambuku/>}/>

               <Route path='/kembalibuku' element={<Kembalibuku/>}/>
               <Route path='/kembalibuku/addkembalibuku' element={<AddKembalibuku/>}/>
               <Route path='/kembalibuku/editkembalibuku/:id' element={<EditKembalibuku/>}/>

             </Routes>
            </div>
            </BrowserRouter>
        );
    }
  
export default App
