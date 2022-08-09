import BookModel from '../db/models/book.model.js';
import ReviewModel from '../db/models/review.model.js'

/**
 * Function to get the active reviews
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {array} list of reviews
 */
const getReviews = async (req, res, next) => {   
    try{
        let reviews = await ReviewModel.find({active : true}).populate('book');
        return res.status(200).send(reviews);
    }catch(err){
        console.log(err)
        return res.status(500).send({'error' : 'A error happend contact admin'});
    }
}

/**
 * Create a new review in the collection
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {object} the review created
 */
const createReview = async (req, res, next) => {   
    try{
        let book = await BookModel.findOne({_id : req.body.book});
        if(book === null){
            return res.status(500).send({'error' : `Book doesn't exits`});
        }else{
            req.body.book = parseInt(req.body.book);
            let review = await ReviewModel.create(req.body);
            return res.status(200).send(review);
        }
    }catch(err){
        console.log(err)
        return res.status(500).send({'error' : 'A error happend contact admin'});
    }
}

/**
 * Update a review in the collection
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {object} the review updated
 */
const updateReview = async (req, res, next) => {   
    try{
        let book = await BookModel.findOne({_id : req.body.book});
        if(book === null){
            return res.status(500).send({'error' : `Book doesn't exits`});
        }else{
            let review = await ReviewModel.findOneAndUpdate(
                { _id: req.query._id },
                { $set: req.body },
                { new : true }
            );
            return res.status(200).send(review);
        }
    }catch(err){
        return res.status(500).send({'error' : 'A error happend contact admin'});
    }
}

/**
 * Delete a review in the collection (logical delete)
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {object} the review deleted
 */
const deleteReview = async (req, res, next) => {   
    try{
        let review = await ReviewModel.findOneAndUpdate(
            { _id: req.query._id },
            { $set: {active : false} },
            { new : true }
        )
        return res.status(200).send(review);
    }catch(err){
        return res.status(500).send({'error' : 'A error happend contact admin'});
    }
}

export {
    getReviews,
    createReview,
    updateReview,
    deleteReview
}