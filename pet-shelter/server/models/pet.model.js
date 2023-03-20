const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'Name is required'],
        minLength: [3, "Name must be more than 3 characters"]
    },
    type:{
        type: String,
        required: [true, 'Type is required'],
        minLength: [3, "Type must be more than 3 characters"],
    },
    description:{
        type: String,
        required: [true, 'Description is required'],
        minLength: [3, "Description must be more than 3 characters"],
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
}, {timestamps: true});

const Pet = mongoose.model('Pet', PetShelterSchema);

module.exports = Pet;