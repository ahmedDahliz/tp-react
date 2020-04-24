import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header'
import Body from './Components/Body'
import Search from './Components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import { bookService } from './services/BookService';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import BookDetails from './views/BookDetails';
import BookForm from './Components/BookForm';
function App() {

  const [Books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const findBooks = () => {
    bookService.getBooks()
    .then(function (response) {
      setBooks(response.data);
    })
  };

  const findBookByTitle = () => {
    bookService.getBookByTitle(searchValue)
    .then(function (response) {
      setBooks(response.data);
    })
  };

  useEffect(()=>{
    console.log('ddddd');
    
    if (searchValue.length === 0){
      findBooks();
    }else {
      findBookByTitle();
    }
  },[searchValue]);

  const searchBook = (BookName) => {
    setSearchValue(BookName);
  }

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Switch>
          <Route path="/Book/:id">
            <Container>
              <BookDetails />
            </Container>
          </Route>
           <Route path="/edit/book/:id">
            <Container>
              <BookForm mode="edit" />
            </Container>
          </Route>
          <Route path="/add/book">
            <Container>
              <BookForm mode="create" />
            </Container>
          </Route>
          <Route path="/">
            <Row>
            <Container>
              <Col>
                <Search getSearch={searchBook} />
              </Col>
            </Container>
            </Row>
            <Row>
              <Container>
                <Col>
                  <Body Books={Books}/>
                </Col>
              </Container>
            </Row>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
