import React, { useState} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Search = ({getSearch})=>{
  const [searchValue, setSearchValue] = useState('');

  const searchBook = (event) => {
    getSearch(searchValue);
  }
  const setSearch = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <InputGroup className="m-3">
    <Link to="add/book" className="btn btn-primary mr-5">Add book</Link>
      <FormControl placeholder="Book title" aria-label="Book title" aria-describedby="basic-addon2" value={searchValue}
       onChange={setSearch} />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={searchBook}>Search</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default Search;
