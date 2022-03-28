import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import KompSatu from './components/KompSatu'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card' 
import ShowTable from './components/ShowTable'
import Nav from './components/Nav'
import IsiCard from './components/IsiCard'

// const daftarAnggota = [
//   {nama: "delia", alamat: "licin"},
//   {nama: "oddete", alamat: "karangrejo"},
//   {nama: "silvanna", alamat: "rogojampi"},
//   {nama: "kagura", alamat: "gambiran"},
// ]

// function App() {
//     return (
//   <div>
//     <Nav />
//     <div style={{margin:"50"}}>
//       <KompSatu/>
//       <Header/>
//       <Main/>
//       {daftarAnggota.map((agt,indeks)=>
//         <Card
//           nama = {agt.nama}
//           alamat = {agt.alamat} />      
//         )}  
//       <ShowTable daftarNama = {daftarAnggota}/>
//       <Footer/>
//     </div>
//   </div>
//   )
// }

const isiCard = [
  {
    Image: "../Components/images/image.1.jpg",
    caption: "Ini Adalah Gambar 1",
  },
  {
    Image: "../Components/images/image.2.jpg",
    caption: "Ini Adalah Gambar 2",
  },
  {
    Image: "../Components/images/image.3.jpg",
    caption: "Ini Adalah Gambar 3",
  },
  {
    Image: "../Components/images/image.4.jpg",
    caption: "Ini Adalah Gambar 4",
  },
  {
    Image: "../Components/images/image.5.jpg",
    caption: "Ini Adalah Gambar 5",
  },
  {
    Image: " ../Components/images/image.6.2.jpg",
    caption: "Ini Adalah Gambar 6",
  },
  {
    Image: "../Components/images/image.7.jpg",
    caption: "Ini Adalah Gambar 7",
  },
  {
    Image: "../Components/images/image.8.jpg",
    caption: "Ini Adalah Gambar 8",
  },
];

function App() {
  return (
    <container>
      <Nav />
      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card image={agt.Image} caption={agt.caption} />
          </div>
        ))}
      </div>
    </container>
  );
}


export default App