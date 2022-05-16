/* eslint-disable jsx-a11y/alt-text */
import Sidebar from './Sidebar';
import Header from './Header';
import '../bootstrap/css/bootstrap.css'
import Perpus from'../perpus.jpg';
const Dasboard = () => {
  return (
    <div id="body-pd">
                <Header/>
                   <Sidebar/>
            <div class="">
            <img src={Perpus} className="w-100 h-100"/> 
                </div>
                  </div>
  )
}

export default Dasboard