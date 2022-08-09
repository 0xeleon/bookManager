import express from 'express';
import { validationResult }  from 'express-validator';

import { getReviews, createReview, updateReview, deleteReview } from '../controllers/review.controller.js';
import { validateCreate, validateUpdate, validateDelete } from '../validation/review.validate.js';

const reviewRoutes = express.Router();

// get reviews
reviewRoutes.get('/review', getReviews);

// create review
reviewRoutes.post('/review', validateCreate, (req, res, next) =>{
    const error = validationResult(req).formatWith(({ msg }) => msg);
    
    const hasError = !error.isEmpty();
    
    if (hasError) {
        res.status(422).json({ error: error.errors });
    } else {
        next();
    }
}, createReview);

// update review
reviewRoutes.put('/review', validateUpdate, (req, res, next) =>{
    const error = validationResult(req).formatWith(({ msg }) => msg);
    
    const hasError = !error.isEmpty();
    
    if (hasError) {
        res.status(422).json({ error: error.errors });
    } else {
        next();
    }
}, updateReview);

// delete review
reviewRoutes.delete('/review', validateDelete, (req, res, next) =>{
    const error = validationResult(req).formatWith(({ msg }) => msg);
    
    const hasError = !error.isEmpty();
    
    if (hasError) {
        res.status(422).json({ error: error.errors });
    } else {
        next();
    }
}, deleteReview);

export default reviewRoutes;