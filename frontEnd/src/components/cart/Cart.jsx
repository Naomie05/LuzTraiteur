import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

import './Cart.css';

const Cart = () => {

  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {[1,1,1,1].map((item) => <CartItem/>)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
            <hr />
            <div className='spay-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Total</span>
                <span>$12.59</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Tax</span>
                <span>$0.59</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Frais de Livraison</span>
                <span>Gratuit</span>
              </div>
              <hr />
              <div className='flex justify-between pt-3 text-black'>
                <span>Grand Total</span>
                <span>$12.59</span>
              </div>
            </div>
            <Link className='check--out' to='/Checkout'>
              <button className='btn btn-primary'>CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
