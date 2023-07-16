export const ListBook = ({ listBook }) => {
  return (
    <>
      <h2>Lista de Libros</h2>
      <ul>
        {listBook.map((item) => {
           
          const book = item.book;
          return (
          
            <li key={item.title}>
              <h2>{book.title}</h2>
              <p>Páginas: {book.pages}</p>
              <p>Género: {book.genre}</p>
              <img src={book.cover} alt="Portada" />
              <p>Sinopsis: {book.synopsis}</p>
              <p>Año: {book.year}</p>
              <p>ISBN: {book.ISBN}</p>
              <p>Autor: {book.author.name}</p>
              <p>Otros libros del autor: {book.author.otherBooks.join(", ")}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
