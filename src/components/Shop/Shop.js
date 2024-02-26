import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from '../product/Product';
import Card from '../Card/Card';
import {addToDb, getStoredCart} from '../../utilities/fakedb';

export default function Shop() {
const [card, setCard] = useState([]);
const [products, setProducts] = useState([]);
useEffect(()=>{

  fetch('products.json')
  .then(res=>res.json())
  .then(data=>setProducts(data))
},[])

useEffect(()=>{

  const storedCart = getStoredCart();
  console.log(storedCart)


},[])

const handleAddToCard = (product) =>{
  // card.push(product)
  const newCard = [...card, product]
  setCard(newCard)
  addToDb(product.id)
}
  return (
    <div className='shop-container'>
        <div className='products-container'> 
       {
         products.map(product => <Product key = {product.id} product = {product}        
          handleAddToCard = {handleAddToCard}  
         ></Product>)
       }
        </div>
        <div className='card-container'>
                
            <Card card={card}></Card>
        </div>
    </div>
  )
}
