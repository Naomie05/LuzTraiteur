import React from 'react';
import { Grid } from '@mui/material';
import { IoIosCheckmarkCircle } from "react-icons/io";
import './OrderCard.css';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/Order/${5}`)} className='order--card p-5 shadow-lg hover:shadow-2xl border bg-white'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://media.istockphoto.com/id/1473452859/photo/tasty-cheeseburger-glass-of-cola-and-french-fries-on-wooden-tray-close-up.jpg?s=612x612&w=0&k=20&c=QLq7mv50xRL-LSfLYgUwNHsHm8Ri5nWrIdNwQL0qCqc=" alt=" " />
                <div className='ml-5 space-y-2'>
                    <p className='text-black font-semibold'>Burgueur Boeuf</p>
                    <p className='opacity-50 text-xs font-semibold text-black'>Quantité: 2</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p className='text-black font-bold'>$12.59</p>
        </Grid>
        <Grid item xs={4}>
            
            {true && <div>
                    <p className='flex'>
                        <IoIosCheckmarkCircle sx={{width:"15px", height:"15px"}} className='check mr-2 '/>
                        <span>Livrée le 05 Janvier 2024</span>
                    </p>
                    <p className='text-xs text-black'>
                        Votre Commande a été Livrée
                    </p>
                </div>}
                {false && <p>
                    <span>Livraison Prévue le 05 Janvier 2024</span>
                </p>}    
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
