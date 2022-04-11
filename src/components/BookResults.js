import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';

export default function BookResults({ searchData, selectBook }) {
  const [books, setBooks] = useState([]); //Set books as searchData

  function updateBooks() {
    setBooks(searchData);
    // console.log('BOOKRESULTS: ', searchData);
    // console.log('BOOKS: ', books);
  }

  //Updates state books when the searchdata is modified
  useEffect(() => {
    updateBooks();
  }, [updateBooks]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <td> Author </td>
            <td> Title </td>
            <td> Published </td>
          </tr>
        </thead>
        <tbody>
          {/* Map books state and add author, title and published to table */}
          {books.map((book, index) => {
            let author = book['author_name'];
            return (
              <tr className="book" onClick={() => selectBook(index)}>
                <td> {author ? author[0] : ''} </td>
                <td> {book.title} </td>
                <td> {book.first_publish_year} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
