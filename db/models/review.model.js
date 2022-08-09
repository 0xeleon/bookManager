import mongoose from 'mongoose'

const ReviewModel = new mongoose.model('Review', new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength1: 1,
        maxlength: 500,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlength1: 1,
        maxlength: 200,
        trim: true
    },
    date : {
        type : Date,
        default: Date.now
    },
    book : {
        type : mongoose.Schema.Types.Number,
        ref : 'Book',
        required: true,
    },
    active : {
        type : Boolean,
        default : true
    }
}));

export default ReviewModel;