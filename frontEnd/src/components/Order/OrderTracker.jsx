import React from 'react';
import { StepLabel, Stepper, Step } from '@mui/material';

const steps = [
  "Placée",
  "Commande Confirmée",
  "Preparation",
  "En Cours de Livraison",
  "Livrée",
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full border shadow-md'>
      <div className='mt-5 mb-5 text-center text-3xl font-semibold'>
        <h1>{steps[activeStep - 1]}</h1>
      </div>
      <div className='mb-5'>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => <Step>
            <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{label}</StepLabel>
          </Step>)}
        </Stepper>
      </div>
      <div className='text-center mb-5'>
        <button className='btn btn-secondary text-black'>Annulez Commande</button>
      </div>
    </div>
  )
}

export default OrderTracker
