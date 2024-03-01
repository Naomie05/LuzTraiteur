import React from 'react';
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import './CartItem.css';

const CartItem = () => {
  return (
    <div className='p-6 shadow-md border cart--item--container'>
      <div className='flex items=center'>
        <div className='w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem]'>
            <img className='w-full h-full object-cover object-top' 
            src="https://media.istockphoto.com/id/1473452859/photo/tasty-cheeseburger-glass-of-cola-and-french-fries-on-wooden-tray-close-up.jpg?s=612x612&w=0&k=20&c=QLq7mv50xRL-LSfLYgUwNHsHm8Ri5nWrIdNwQL0qCqc=" alt=" " />
        </div>
        <div className='item--infos'>
            <div className='place-content-between item--details'>
                <div>
                  <p className='font-semibold'>Burgueur Boeuf</p>
                </div>
                <div className='price'>
                  <h3 >$12.59</h3>
                </div>
            </div>
            <div className='cart--item--buttons--container'>
              <div className='remove--link'>
                  <button><p>Remove</p></button>
              </div>
              <div className='add--remove--button'>
                <button className='btn btn-secondary'>
                  <div className='add--remove--button'>
                    <IoMdRemove/>
                    <h1> 1 </h1>
                     <IoMdAdd/>
                  </div>
                </button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
