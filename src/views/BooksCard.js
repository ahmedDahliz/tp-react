import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BooksCard = ({data})=>{
  return (
    <Card bg="light" style={{ width: '18rem' }}>
       <Card.Header>{data.title}</Card.Header>
       <Card.Body>
           {data.summary}
           <Link to={`/Book/${data.id}`} className="btn btn-primary d-block m-1">Details</Link>
       </Card.Body>
     </Card>
  );
}

export default BooksCard;
