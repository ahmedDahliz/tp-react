import axios from 'axios';

class BookService {

    getBooks(){
        return axios.get('/books');
    }

    getBookByTitle(bookTitle){
        return axios.get(`/books?title=${bookTitle}`);
    }

    getBookById(bookId){
        return axios.get(`/books/${bookId}`);
    }

    editBook(book){
        return axios.put(`/books/${book.id}`, book);
    }

    createBook(book){
        return this.getBooks().then(resp =>{
            var id = resp.data[resp.data.length-1].id;
            book['id'] = ++id;            
            return axios.post('/books',book)
            
        } )
    }
}

export const bookService = new BookService();