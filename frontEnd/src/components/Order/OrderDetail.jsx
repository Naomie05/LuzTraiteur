import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { Grid } from '@mui/material';

const OrderDetail = () => {
  return (
    <div className='px:5 lg:px-20'>
      <div>
        <h1 className='font-semibold text-3xl py-7'>Adresse de Livraison</h1>
        <AddressCard/>
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3}/>
      </div>
      <Grid className='space-x-5 mb-20' container>
         
        <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>
          <Grid item xs={6}>
          {[1,1,1].map((item) =>
            <div className='flex items-center space-x-5 mb-5'>
              <img className='w-[7rem] h-[7rem] object-cover object-top' src="https://media.istockphoto.com/id/1473452859/photo/tasty-cheeseburger-glass-of-cola-and-french-fries-on-wooden-tray-close-up.jpg?s=612x612&w=0&k=20&c=QLq7mv50xRL-LSfLYgUwNHsHm8Ri5nWrIdNwQL0qCqc=" alt="" />
              <div className='space-y-2 ml-5 text-black'>
                <p className='font-semibold'>Burgeur Boeuf</p>
                <p className='space-x-5 opacity-50 text-xs font-semibold'>Quantite 2</p>
                <p className='font-semibold'>$12.59</p>
              </div>
            </div>)}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderDetail
