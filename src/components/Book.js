import React from 'react';
import { Container } from 'react-bootstrap';

export default function Book({ selectedBook }) {
  let isbn = selectedBook['isbn'];
  let author = selectedBook['author_name'];
  let language = selectedBook['language'];
  let publisher = selectedBook['publisher'];
  let subject = selectedBook['subject'];

  return (
    <Container className="book-page">
      <h1> {selectedBook.title} </h1>
      <img //Get book cover if available
        src={`https://covers.openlibrary.org/b/isbn/${
          isbn ? isbn[0] : ''
        }-M.jpg`}
      />
      <div className="book-details">
        <p> {/* If there is more than one of each (eg. author) they are joined with a comma */}
          <span>Authors:</span> {author ? author.join(', ') : ''}
        </p>
        <p>
          <span>Languages</span>: {language ? language.join(', ') : ''}
        </p>
        <p>
          <span>Publisher:</span> {publisher ? publisher.join(', ') : ''}
        </p>
        <p>
          <span>Subject:</span> {subject ? subject.join(', ') : ''}
        </p>
      </div>
    </Container>
  );
}
