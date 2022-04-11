import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, Container } from 'react-bootstrap';

//Components
import Nav from './components/Nav.js';
import Search from './components/Search.js';
import BookResults from './components/BookResults.js';
import Book from './components/Book.js';

export default function App() {
  //States for storing search results, mode for conditional rendering
  const [searchData, setSearchData] = useState([]);
  const [updateList, setUpdateList] = useState('');
  const [mode, setMode] = useState('results');
  const [selectedBook, setSelectedBook] = useState(null);

  // console.log('SEARCHDATA', searchData);

  //Show book details
  function selectBook(index) {
    setSelectedBook(searchData[index]);
    setMode('details');
  }

  return (
    <Stack gap="5">
      <Nav />
      <Search callback={setSearchData} updateList={updateList} />

      {/* Condtional rendering, shows search resuls or book details */}
      {mode === 'details' ? (
        <Container>
          {/* The back button which is seen on the book details page */}
          <Button onClick={() => setMode('results')}> Back </Button>
          <Book selectedBook={selectedBook} />
        </Container>
      ) : (
        <BookResults //Renders BookResults component
          searchData={searchData}
          setUpdateList={setUpdateList}
          selectBook={selectBook}
        />
      )}
    </Stack>
  );
}
