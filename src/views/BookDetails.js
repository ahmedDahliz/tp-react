import React, { useState, useEffect } from 'react';
import { bookService } from '../services/BookService';
import { useParams, Link } from 'react-router-dom';

const BookDetails = ({data})=>{

  let { id } = useParams();
  const [Book, setBook] = useState([]);
  const getBookById = ()=>{
    bookService.getBookById(id).then((response)=>{
        setBook(response.data)
    });
  }

  useEffect(()=>{
    getBookById();
  }, []);

  return (
    <div>
      <Link to={`/edit/book/${Book.id}`} className="text-right m-3 btn btn-dark border-dark">Edit</Link>
      <div className="p-2 border border-dark rounded">
      <h3>{Book.title}</h3>
          <p> {Book.summary} </p>
          <hr className="bg-primary" />
          <p className="m-0">{Book.language}</p>
          <p>{Book.author}</p>
      </div>
    </div>
  );
}

export default BookDetails;
