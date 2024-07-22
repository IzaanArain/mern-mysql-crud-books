import React, { useState } from "react";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div>
        <form className="book-form" onSubmit={handleOnSubmit}>
          <h1>Add new book</h1>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            onChange={handleChange}
          />
          <input
            type="text"
            name="cover"
            placeholder="cover"
            onChange={handleChange}
          />
          <button type="onSubmit">ADD</button>
        </form>
      </div>
    </>
  );
};

export default Add;
