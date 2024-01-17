import React from 'react';
import {Grid} from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

const DeliveyAddressForm = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
            <div className='p-5 py-7 border-b cursor-pointer'>
                <AddressCard/>
                <button className='btn btn-primary'>Livrez Ici</button>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveyAddressForm
