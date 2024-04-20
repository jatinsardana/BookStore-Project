import React from 'react'
import imge from '/oneBook.jpg'
import Cart from './Cart'
import { useEffect , useState } from "react";
import axios from "axios";

function Freecart() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBook(res.data);
      } catch (error) {
        console.log("eroor : ", error);
      }
    };
    getBook();
  }, []);
  const slicedItems = book.slice(0, 4);
  return (
    <>
        <div className=' mt-8 ml-5'>
          <h1 className=' text-3xl text-green-500 font-bold'>Free Featured Books!!!</h1>
          <p className='text-green-300 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti tempora veritatis, tenetur mollitia reiciendis!</p>
        </div>
      <div className='flex mt-5 overflow-hidden gap-4 bg-transparent ml-3 mr-3'>
        {slicedItems.map((items)=>(
          <Cart
          id={items.id}
          tittle={items.title}
          author={items.author}
          year={"free"}
          language={items.language}
          image={items.imageLink}
           />          
        ))}
      </div>
    </>
  )
}

export default Freecart
