import React from 'react'
import './Supplierhome.scss'
import ReactDOM from 'react-dom'
import { CartProvider } from 'use-shopping-cart'

const Supplierhome = () => {
  return (
    <div className='main_suppelier'>
        <div className="supplier_navbar">
            <div className="sup_logo">Logo</div>
            <div className="sup_btns">Buttons</div>
        </div>

        <div className="oreder_info">
            <div className="pending">Pending orders</div>
            <div className="history">History</div>
        </div>
        <div className="footer">Footer</div>
    </div>
  )
}

export default Supplierhome