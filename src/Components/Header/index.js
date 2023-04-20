import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Select } from '../Form'
import './style.css'

const Navbar = () => {
  const eCart = useSelector((state) => state.EcartReducer)
  const [cart, setCart] = useState()

  useEffect(() => {
    setCart(eCart)
  }, [eCart])

  // console.log('ecart1', cart)

  return (
    <div
      style={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <AppBar>
        <Toolbar>
          <span className="logo">REDUX STORE</span>
          <div>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/ecart">
              Cart
            </Link>
            {/* <span className="cartCount">Cart items: {cart?.length}</span> */}
          </div>

          <div className="Icart">
            <Select />
            <i class="fa fa-shopping-cart">
              <span className="Cart-Num">{cart?.length}</span>
            </i>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
