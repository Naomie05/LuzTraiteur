import React from 'react';
import CartItem from './CartItem';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import './Cart.css';
import { Button } from '@mui/material';

const Cart = () => {

  const navigate = useNavigate();

  const handleCheckout = () =>{
    navigate('/Address')
  }

  return (
    <div className='cart--container'>
      <div className='lg:grid grid-cols-3 lg:px-16 relative cart'>
        <div className='col-span-2 shadow-lg product--section'>
          <div className='cart--links'>
            <h3>
              <NavLink to='/Menu' className='link'>Menu </NavLink> / Votre Panier
            </h3>
          </div>
          <div className='cart--titles'>
            <h3>Votre Panier</h3>
            <div>
              <Link className='button--add' to='/Menu'>
                <button className='btn btn-secondary'>AJOUTER PLUS DE PRODUITS</button>
              </Link>
            </div>
          </div>
          <br />
          <div className='col-span-2 item--cards'>
            {[1,1,1,1].map((item) => 
            <CartItem/>
            )}
          </div> 
        </div>
        <div className='px-2 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='shadow-lg details--section'>
            <div className='detail--title price--detail'>
              <p className='uppercase font-bold pb-4 text-black'>Price details</p>
            </div>
            <hr />
            <div className='spay-y-3 font-semibold mb-15 '>
              <div className='flex justify-between pt-3 text-black price--detail'>
                <span>Total</span>
                <span>$12.59</span>
              </div>
              <div className='flex justify-between pt-3 text-black price--detail'>
                <span>Tax</span>
                <span>$0.59</span>
              </div>
              <div className='flex justify-between pt-3 text-black price--detail'>
                <span>Frais de Livraison</span>
                <span>Gratuit</span>
              </div>
              <hr />
              <div className='flex justify-between pt-3 text-black price--details'>
                <span>Grand Total</span>
                <span>$12.59</span>
              </div>
            </div>
            <div className='price--detail'>
              <Button onClick={handleCheckout} variant='contained' sx={{width:"100%", backgroundColor:"#FF9F0D", fontSize:"25px", marginTop:"25px", marginBottom:"25px", color:"black", ":hover":{backgroundColor:"white", borderColor:"#FF9F0D", border:"2"}}}>CHECKOUT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
