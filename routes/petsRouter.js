const express = require('express');

const router = express.Router();

const petsCtrl = require('../controllers/petsCtrl');

// Create pet
router.post('/', petsCtrl.create);

// Get all pets
router.get('/', petsCtrl.index);

// Get one pet
router.get('/:id', petsCtrl.show);

// Update pet
router.put('/:id', petsCtrl.update);

// Delete pet
router.delete('/:id', petsCtrl.deletePet);

module.exports = router;