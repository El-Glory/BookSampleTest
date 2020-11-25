import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 100
    },

    email:{
        type:String,
        required: true,
        unique: 1,
        trim: true
    },

    bookName: {
        type: String,
        maxlength: 100,
        required: true
    },

    pages:{
        type: String,
        required: true,

    }
})

const Author = mongoose.model("Author", authorSchema);

module.exports = {  Author }