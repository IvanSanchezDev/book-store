import { addBookToReading } from "../Reducers/listReadingSlice";
import { useDispatch, useSelector } from "react-redux";

export const ListBook = ({ listBook }) => {
  const { books } = useSelector((state) => state.listReadingBooks);
  const dispatch = useDispatch();

  const addBookHandler = (name) => {
    const bookFinded = listBook.find((item) => item.book.title == name);
    dispatch(addBookToReading(bookFinded));
  };

  return (
    <>
      <h2>{listBook.length} Libros Disponibles</h2>
      <h4>{books.length} en la lista de lectura</h4>
        <div className="books">
          {listBook.map((item) => {
            const book = item.book;
            return (
              <div key={book.title}>
                <img src={book.cover} alt="Portada" className="img-fluid"  onClick={() => addBookHandler(book.title)}/>
              </div>
            );
          })}
        </div>
     
     
    </>
  );
};
