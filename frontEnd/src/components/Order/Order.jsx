import React from 'react';
import { Grid } from '@mui/material';
import OrderCard from './OrderCard';
import './Order.css';

const orderStatus = [
    {label: "En Route", value:"on_the_way"},
    {label: "Livrée", value:"delivered"},
    {label: "Annulée", value:"cancelled"},
    {label: "Remboursée", value:"refund"},
]

const Order = () => {
  return (
    <div className='order px:5 lg:px-20 bg-orange-50 top-5'>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticly top-5'>
                    <h1 className='font-bold text-lg'>Filtres</h1>
                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>STATUT DE LA COMMANDE</h1>
                        {orderStatus.map((option) => 
                        <div className='flex item-center'>
                            <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                            <label htmlFor="option.value" className='ml-3 text-sm text-gray-600'>
                                {option.label}
                            </label>
                        </div>)}
                    </div>
                </div>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-3'>
                    {[1,1,1,1,1,1,1].map((item) => <OrderCard/>)}
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Order
