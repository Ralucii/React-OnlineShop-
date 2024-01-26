import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { useState } from 'react';
import Cart from "../Cart/Cart";
import { useSelector } from 'react-redux';


const Navbar = () => {

    const [open,setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products);

    return(
        <div className='navbar'>
            <div className="wrapper">
            <div className="left">
                
                
                <div className="item">
                    <Link className="link" to="/products/1">Furniture</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/2">Lighting</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/5">Textiles</Link>
                </div>
                <div className="item">
                    
                    <Link  className="link"to="/products/4">Decorations</Link>
                </div>
            </div>

            <div className="center">
            <Link className="link" to="/">HOMEDECO</Link>
            </div>


            <div className="right">

            <div className="item">
            <Link className="link" to="/">Homepage</Link>
            </div>


    
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon/>
                </div>

                <div className="item">
                    <img src="/img/flag.png" width="20" weight="40" alt=""/>
                    <KeyboardArrowDownIcon/>
                </div>
            
                <div className="icons">
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                <ShoppingCartIcon/>
                <span>{products.length}</span>

                </div>
            </div>
            </div>
            </div>
            {open && <Cart/>}
            </div>
        
    )
}

export default Navbar
