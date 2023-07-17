import { addBookToReading } from "../Reducers/listReadingSlice";
import { useDispatch, useSelector } from "react-redux";
import { SelectCategorias } from "./SelectCategorias";
import { useState, useEffect } from "react";

export const ListBook = ({ listBook }) => {

  const [selectedValue, setSelectedValue] = useState('');
  const [booksToRender, setBooksToRender] = useState(listBook);

  const { books } = useSelector((state) => state.listReadingBooks);
  const dispatch = useDispatch();

  const addBookHandler = (name) => {
    const bookFinded = listBook.find((item) => item.book.title == name);
    dispatch(addBookToReading(bookFinded));
  };



  const filterCategorias = () => {
      const filteredBooks = listBook.filter((item) => item.book.genre === selectedValue);
      setBooksToRender(filteredBooks);
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  
  useEffect(() => {
    filterCategorias();
  }, [booksToRender]);

  return (
    <>
      <h2>{booksToRender.length} Libros Disponibles</h2>
      <h4>{books.length} en la lista de lectura</h4>

      <div className="mb-5">
        <SelectCategorias handleSelectChange={handleSelectChange}/>
      </div>

        <div className="books">
          {booksToRender.map((item) => {
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
