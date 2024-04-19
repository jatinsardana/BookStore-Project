import React from 'react'
import imge from '/oneBook.jpg'
import Cart from './Cart'

function Freecart() {
  return (
    <>
        <div className=' mt-8 ml-5'>
          <h1 className=' text-3xl text-green-500 font-bold'>Free Featured Books!!!</h1>
          <p className='text-green-300 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti tempora veritatis, tenetur mollitia reiciendis!</p>
        </div>
      <div className='flex mt-5 overflow-hidden gap-4 bg-transparent ml-3 mr-3'>
        <Cart tittle={"Things Fall Apart"} author={"JatinSardana"} language={"English"} year={"free"}/>
        <Cart tittle={"Fairy tales"} author={"JatinSardana"} language={"English"} year={"free"}/>
        <Cart tittle={"The Divine Comedy"} author={"JatinSardana"} language={"English"} year={"free"}/>
        <Cart tittle={"The Epic Of Gilgamesh"} author={"JatinSardana"} language={"English"} year={"free"}/>                
      </div>
    </>
  )
}

export default Freecart
