import { addBookToReading } from "../Reducers/listReadingSlice";
import { useDispatch } from "react-redux";




export const ListBook = ({ listBook }) => {

  const dispatch=useDispatch();

  const addBookHandler=(name)=>{
    const bookFinded=listBook.find(item=>item.book.title==name)
    dispatch(addBookToReading(bookFinded));
  }

  return (
    <>
      <h2>{listBook.length} Libros Disponibles</h2>
      <ul>
        {listBook.map((item) => {
           
          const book = item.book;
          return (
          
            <li key={book.title}>
              <h2>{book.title}</h2>
              <p>Páginas: {book.pages}</p>
              <p>Género: {book.genre}</p>
              <img src={book.cover} alt="Portada" style={{width:"10%"}} />
              <p>Sinopsis: {book.synopsis}</p>
              <p>Año: {book.year}</p>
              <p>ISBN: {book.ISBN}</p>
              <p>Autor: {book.author.name}</p>
              <p>Otros libros del autor: {book.author.otherBooks.join(", ")}</p>
              <button onClick={()=>addBookHandler(book.title)}>Agregar a la lista de lectura</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
