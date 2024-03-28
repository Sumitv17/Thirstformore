import React from 'react'
import './Firstpage.scss';

import {Link} from "react-router-dom";
const Firstpage = () => {
  return (
    <div className='mainl'>
        <div className="login_box">
         <Link to="/userhome"> <button className='btnuser'>User</button> </Link>
        </div>
        <div className="login_box2">
          <Link to="/supplierdetails">  <button className='btnsup'>Supplier</button> </Link>
        </div>
    </div>
  )
}

export default Firstpage;