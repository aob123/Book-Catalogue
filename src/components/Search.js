import React, { useState } from 'react';
import {
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
  Spinner,
} from 'react-bootstrap';

export default function Search({ callback }) {  
  
  //Set states
  const [data, setData] = useState([]); //Stores data from API
  const [searchTerm, setSearchTerm] = useState(''); //Stores text from input
  const [loading, setLoading] = useState('none'); //Show/hide loading spinner
  const [searchBy, setSearchBy] = useState('q'); //Set search by (title, author or subject)
  const [searchResults, setSearchResults] = useState(null); //Set search results
  const searchURI = `https://openlibrary.org/search.json?${searchBy}=${searchTerm}`;
  let dataArray = [];

  //Set search type (title (default), author, subject)
  function setSearchType(event) {
    setSearchBy(event.target.value);
    // console.log(event.target.value);
  }

  //Get the input form search form, split by spaces and join with + character
  function setTitleState(event) {
    let input = event.target.value;
    let split = input.split(' ').join('+');
    setSearchTerm(split);
  }

  //Get data from API
  async function getData() {
    let res = await fetch(searchURI);
    setLoading('block');
    setSearchResults(null);
    let data = await res.json();
    updateArray(data);
    if (data !== undefined) {
      setLoading('none');
    }
    setSearchResults(data.numFound);
    // console.log(searchURI);
    // console.log(data);
  }

  function updateArray(data) {
    dataArray = data.docs;
    let filtered = dataArray.slice(0, 30);
    setData(filtered);
    callback(filtered);
    // console.log(filtered);
    // console.log(filtered.length);
  }

  return (
    <Container className="search">
      <Form>
        <Form.Select
          aria-label="Search type"
          onChange={() => setSearchType(event)}
        >
          <option> Search by... </option>
          <option value="q"> Title </option>
          <option value="author"> Author </option>
          <option value="subject"> Subject </option>
        </Form.Select>
        <InputGroup>
          <FormControl onChange={() => setTitleState(event)} />
          <Button onClick={() => getData()}> Search </Button>
        </InputGroup>
      </Form>

      <div className="results-loading">
        <Spinner animation="border" role="status" style={{ display: loading }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        {searchResults ? (
          <p>
            Showing {data.length} of {searchResults} matches
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </Container>
  );
}
