import React, { useState } from "react";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desciption: "",
    price: null,
    cover: "",
  });

  return (
    <>
      <div>
        <form action="" className="book-form">
          <h1>Add new book</h1>
          <input type="text" placeholder="title" />
          <input type="text" placeholder="description" />
          <input type="text" placeholder="price" />
          <input type="text" placeholder="cover" />
        </form>
      </div>
    </>
  );
};

export default Add;
