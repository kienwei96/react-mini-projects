import React, { useState } from 'react';

function Form(props) {
  const [gifTitle, setGifTitle] = useState('');

  const handleChange = (e) => {
    console.log('typing...');
    const title = e.target.value;
    setGifTitle(title);
  };

  const handleEnter = (e) => {
    e.preventDefault();
    props.handleEnter(gifTitle);
    console.log(gifTitle, "is store to gifEnter now");
  }

  return (
    <>
      <form onSubmit={handleEnter}>
        <label htmlFor="gifTitle">Gif Name:</label>
        <input
          id="gifTitle"
          type="text"
          value={gifTitle}
          placeholder="Enter anything..."
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
