import React from 'react';
import { CardColumns,Row, Container } from 'react-bootstrap';
import BooksCard from '../views/BooksCard';

const Body = ({Books, getSearch})=>{
  return (
    <Container>
    <Row>
      <CardColumns>
        {Books.map((book, key)=> <BooksCard data={book} key={book.id} />)}
      </CardColumns>
    </Row>
    </Container>
  );
}

export default Body;
