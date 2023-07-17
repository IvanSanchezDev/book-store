import { useSelector } from "react-redux";

export const Readinglist = () => {
  const { books } = useSelector((state) => state.listReadingBooks);

  return (
    <>
      <h3>Lista de Lectura</h3>
      <div className="books">
        {books.map((item) => {
          const book = item.book;
          return (
            <div key={book.title}>
              <img src={book.cover} className="img-less" />
            </div>
          );
        })}
      </div>
    </>
  );
};
