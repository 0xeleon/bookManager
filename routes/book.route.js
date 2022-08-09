import express from 'express';
import { validationResult }  from 'express-validator';

import { getBooks, createBook, updateBook, deleteBook } from '../controllers/book.controller.js';
import { validateCreate, validateUpdate, validateDelete } from '../validation/book.validate.js';

const bookRoutes = express.Router();

// get books
bookRoutes.get('/book', getBooks);

// create book
bookRoutes.post('/book', validateCreate, (req, res, next) =>{
    const error = validationResult(req).formatWith(({ msg }) => msg);
    
    const hasError = !error.isEmpty();
    
    if (hasError) {
        res.status(422).json({ error: error.errors });
    } else {
        next();
    }
}, createBook);

// update book
bookRoutes.put('/book', validateUpdate, (req, res, next) =>{
    const error = validationResult(req).formatWith(({ msg }) => msg);
    
    const hasError = !error.isEmpty();
    
    if (hasError) {
        res.status(422).json({ error: error.errors });
    } else {
        next();
    }
}, updateBook);

// delete book
bookRoutes.delete('/book', validateDelete, (req, res, next) =>{
    const error = validationResult(req).formatWith(({ msg }) => msg);
    
    const hasError = !error.isEmpty();
    
    if (hasError) {
        res.status(422).json({ error: error.errors });
    } else {
        next();
    }
}, deleteBook);

export default bookRoutes;