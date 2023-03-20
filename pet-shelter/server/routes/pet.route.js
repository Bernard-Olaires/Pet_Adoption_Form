const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/allPets', PetController.getAllPets)
    app.get('/api/onePet/:id', PetController.getPetById)
    app.post('/api/newPet', PetController.createPet)
    app.put('/api/updatePet/:id', PetController.updatePet)
    app.delete('/api/deletePet/:id', PetController.deletePet)
}