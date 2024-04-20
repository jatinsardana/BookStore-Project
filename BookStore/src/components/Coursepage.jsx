import React, { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Coursepage() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
        const res = await axios.get("http://localhost:3000/book");
        setBook(res.data);
    };
    getBook();
  }, []);

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" mt-36 flex items-center justify-center text-center">
          <h1 className=" text-4xl font-bold">
            We're delighted to have you{" "}
            <span className=" text-orange-400">Here!!!</span>{" "}
          </h1>
        </div>
        <p className=" mt-3 flex justify-center text-center items-center text-xl font-serif text-blue-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          adipisci voluptate dolore molestiae velit quibusdam. Eius ut ducimus
          harum maiores quibusdam itaque magni Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Cum reiciendis exercitationem eos
          similique labore, voluptatem quae, commodi earum amet ipsa, unde
          sapiente ipsum! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti ducimus quas, itaque autem debitis quos atque!
          Temporibus quia natus, ducimus consequuntur quis doloribus
          necessitatibus ullam impedit placeat excepturi molestias pariatur
          debitis? Sed, inventore! Accusantium..
        </p>
        <Link to="/">
          <div className="flex justify-center mt-5">
            <button className="btn btn-info">Back</button>
          </div>
        </Link>
        <div className=" mt-5 gap-y-2 grid grid-cols-3">
          {book.map((items) => (
            <Cart
              id={items.id}
              tittle={items.title}
              author={items.author}
              year={items.year}
              language={items.language}
              image={items.imageLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Coursepage;
