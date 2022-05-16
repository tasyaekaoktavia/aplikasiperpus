import React from 'react';
const Sidebar = () => {
    return (
      <>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            
            <a href="/" className="nav_logo">
              
              <i className="fa-solid fa-chalkboard-user nav_logo-icon" />
              <span className="nav_logo-name">PERPUSTAKAAN</span>
            </a>
            <div className="nav_list">
              
              <a href="/" className="nav_link ">
                <i className="fa-solid fa-gauge nav_icon" />
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="/pengunjung" className="nav_link">
                
                <i className="fa-solid fa-users nav_icon" />
                <span className="nav_name">Pengunjung </span>
              </a>
              <a href="/daftarbuku" className="nav_link">
                
                <i className="fa-solid fa-book nav_icon" />
                <span className="nav_name">Data Buku</span>
              </a>
              <a href="/pinjambuku" className="nav_link">
                <i className="fa-solid fa-handshake nav_icon" />
                <span className="nav_name">Peminjaman Buku</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
    
    )
}
 
export default Sidebar