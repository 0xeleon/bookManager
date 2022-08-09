import BookModel from '../db/models/book.model.js';

/**
 * Function to get the active books
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {array} list of books
 */
const getBooks = async (req, res, next) => {   
    try{
        let books = await BookModel.find({active : true});
        return res.status(200).send(books);
    }catch(err){
        return res.status(500).send({'error' : 'A error happend contact admin'});
    }
}

/**
 * Create a new book in the collection
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {object} the book created
 */
const createBook = async (req, res, next) => {   
    try{
        req.body._id = req.body.id;
        delete req.body.id;
        let book = await BookModel.create(req.body);
        return res.status(200).send(book);
    }catch(err){
        return res.status(500).send({'error' : 'A error happend contact admin'});
    }
}

/**
 * Update a book in the collection
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {object} the book updated
 */
const updateBook = async (req, res, next) => {   
    try{
        let book = await BookModel.findOneAndUpdate(
            { _id: req.query.id },
            { $set: req.body },
            { new : true }
        );
        return res.status(200).send(book);
    }catch(err){
        return res.status(500).send({'error' : 'A error happend contact admin'});
    }
}

/**
 * Delete a book in the collection (logical delete)
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {object} the book deleted
 */
const deleteBook = async (req, res, next) => {   
    try{
        let book = await BookModel.findOneAndUpdate(
            { _id: req.query.id },
            { $set: {active : false} },
            { new : true }
        )
        return res.status(200).send(book);
    }catch(err){
        return res.status(500).send({'error' : 'A error happend contact admin'});
    }
}

export {
    getBooks,
    createBook,
    updateBook,
    deleteBook
}