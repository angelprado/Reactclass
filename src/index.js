import React, { Children } from "react";
import ReactDOM from "react-dom";

//CSS
import "./Style.css";
import { books } from "./books";
import Book from "./Book";

/*
JSX  Rules
the name of the funtion to show in the react render  has to start with upper case
return single element ya sea
section / section /article o react fragment
use camelCase for Html attibute 
className instead of class
close every element ya sea ( />  o <elemet/>  )
formattin be careful with the  paretesis() 
*/

function Booklist() {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { img, tituloDelLibro, Author } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
      {/* 
      <Book>
        <p>
          What if animals did what YOU do? This bestselling story imagines how
          animals would kiss their loved ones good night!
        </p>
      </Book> */}
    </section>
  );
}

// const Book = () => {
//   return (
//     <article className="book">
//       <MiImage />
//       <Title />
//       <Author />
//       <Rate />
//     </article>
//   );
// };

// const MiImage = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UY218_.jpg"
//     alt=""
//   />
// );
// const Author = () => (
//   //css on JSX note :si ya esta editado en de esta forma no podras editar el mismo valor en css file
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Emily Winfield Martin{" "}
//   </h4>
// );

// //mescando jsx con css usasando curly braces
// const tituloDelLibro = "The Wonderful Things You Will Be";
// const Title = () => <h1>{tituloDelLibro}</h1>;

// const math = 2 + 2;
// const Rate = () => <h4>{"Rate :" + math + " Stars"}</h4>;

ReactDOM.render(<Booklist />, document.getElementById("root"));
