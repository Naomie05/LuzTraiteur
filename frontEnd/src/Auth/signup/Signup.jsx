import React, { useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, register } from '../../State/Auth/Action';

const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store => store)

    useEffect(() =>{
        if(jwt){
            dispatch(getUser(jwt))
        }
    },[jwt, auth.jwt])

    const handleSubmit = async (event) =>{
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }

        dispatch(register(userData))

        console.log("userData", userData)

        /*try {
            await dispatch(register(userData));
            navigate('/Login'); // Navigate to the login page after successful signup
        } catch (error) {
            console.error("Signup failed", error);
        }*/

    }

  return (
    <div className='bg-orange-back'>
    <div className='flex flex-col bg-white items-center text-center mx-5 lg:my-10 sm:mx-10 lg:grid lg:grid-cols-2 lg:gap-6'>
        <div>
            <img className='w-screen object-cover h-40 sm:h-1/3 lg:h-full' src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=5ro7Cvwx79tWpyN1r2hy3DwplFi5FuPrD_4DYD8tZpg=" alt="" />
        </div>
        <div className='bg-white'>
            <h1 className='my-5 text-4xl font-semibold sm:my-10'>INSCRIPTION</h1>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3} className='mb-10'>
                    <Grid item xs={12} sm={6}>
                        <TextField required id='firstName' name='firstName' label='Prénom' fullWidth autoComplete='given-name'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id='lastName' name='lastName' label='Nom de Famille' fullWidth autoComplete='last-name'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id='email' name='email' label='Email' fullWidth autoComplete='email'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id='password' name='password' label='Mot de Passe' fullWidth autoComplete='password'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='bg-[#FF9F0D] w-full' type='submit' variant='contained' size='large' sx={{padding:".8rem 0", backgroundColor:"#FF9F0D", color:"black", fontSize: 'h6.fontSize', fontWeight: 'bold', ":hover":{backgroundColor:"#f5c681"}}}>S'inscrire</Button>
                    </Grid>
                </Grid>
            </form>
            <div className='mb-10'>
                <div>
                    <h3 className='text-lg'>Vous avez déjà un compte? <Link to="/Login" className='text-first underline'>SE CONNECTER</Link></h3>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup
