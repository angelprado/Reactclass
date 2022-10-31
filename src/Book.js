import React from "react";

const buttonHandler = () => {
  alert("you clicked the button");
};
const buttoncloplexhandler = (Author) => {
  console.log(Author);
};
const Book = (props) => {
  const { img, tituloDelLibro, Author } = props.book;
  return (
    <article
      className="book"
      //   onMouseOver={() => {
      //     console.log(tituloDelLibro);
      //   }}
    >
      <img src={img} alt="" />
      <h1>{tituloDelLibro}</h1>
      <h4>{Author}</h4>
      <button type="button" onClick={buttonHandler}>
        {" "}
        my Button{" "}
      </button>
      <button type="button" onClick={() => buttoncloplexhandler(Author)}>
        {" "}
        ComplexB{" "}
      </button>
      {/* {children} */}
    </article>
  );
};
export default Book;
