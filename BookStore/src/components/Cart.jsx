import React from 'react'
import imge from '/oneBook.jpg'

function Cart({id , tittle , author , year , language , image}) {
  return (
    <>
      <div className="card card-compact w-96 bg-base-300 shadow-2xl">
  <figure><img src={imge} alt="Books" /></figure>
  <div className="card-body">
    <h2 className="card-title">{tittle}</h2>
    <p>If a dog chews Books whose Books does he choose?</p>
    <p className="font-bold">Author : {author}</p>
    <p className="font-bold">Language : {language}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now ₹{year}</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Cart
