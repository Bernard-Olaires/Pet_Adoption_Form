const {response} = require('express');
const Pet = require('../models/pet.model');

module.exports = {

    getAllPets: (req, res) => {
        Pet.find()
            .then((allPets)=>{
                res.json(allPets)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    },
    getPetById: (req, res) => {
        const { params } = req;
        Pet.findOne({_id: params.id})
            .then((pet)=>{
                res.json(pet)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    createPet: (req, res) => {
        Pet.create(req.body)
            .then((newPet)=>{
                res.json(newPet)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    },
    updatePet: (req, res) => {
        Pet.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then((updatedPet)=>{
                res.json(updatedPet)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    },
    deletePet: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

}
