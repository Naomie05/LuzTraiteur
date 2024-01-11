import React, {useRef} from 'react'
import Carrousel from '../../components/carrousel/Carrousel';
import traiteurImages from './traiteurData';

import './Traiteur.css';

const Traiteur = () => {
  const form = useRef()

  return (
    <div >
      <div className='traiteur-carousel'>
        <Carrousel slides={traiteurImages}/>
      </div>
      <div className='traiter--section'>
        <div className='traiteur--titles'>
          <h1>REQUETTE DE SERVICE TRAITEUR</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga excepturi nobis tempora temporibus magnam!</p>
        </div>
        <form ref={form} className='traiteur--form'>
          <div className='form--container'>
            <label htmlFor="name" className='form--label'>
              <span>Nom Complet*</span>
              <input type="text" className='form--input text-md' name='name' id='name' required />
            </label>
            <label htmlFor="email" className='form--label'>
              <span>Email*</span>
              <input type="email" className='form--input text-md' name='email' id='email' required />
            </label>
            <label htmlFor="phone" className='form--label'>
              <span>Numero de Telephone*</span>
              <input type="number" className='form--input text-md' name='phone' id='phone' required />
            </label>
            <label htmlFor="date" className='form--label'>
              <span>Date de L'Evenement*</span>
              <input type="date" className='form--input text-md' name='date' id='date' required />
            </label>
            <label htmlFor="time" className='form--label'>
              <span>Heure de L'Evenement*</span>
              <input type="time" className='form--input text-md' name='time' id='time' required />
            </label>
            <label htmlFor="guests" className='form--label'>
              <span>Nombre des invites*</span>
              <input type="number" className='form--input text-md' name='guests' id='guests' required />
            </label>
            <label htmlFor="address" className='form--label'>
              <span>Adresse*</span>
              <input type="text" className='form--input text-md' name='address' id='address' required />
            </label>
          </div>
          <div>
              <button className="btn btn-primary contact--form--btn">
                  Envoyez Requette
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Traiteur
