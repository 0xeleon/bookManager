import mongoose from 'mongoose'

const BookModel = new mongoose.model('Book', new mongoose.Schema({
    _id: Number,
    title: {
        type: String,
        required: true,
        minlength1: 1,
        maxlength: 2000,
        trim: true
    },
    author: {
        type: String,
        required: true,
        minlength1: 1,
        maxlength: 1000,
        trim: true
    },
    dateRelease : {
        type : Date,
        required: true,
    },
    active : {
        type : Boolean,
        default : true
    }
}));

export { BookModel };