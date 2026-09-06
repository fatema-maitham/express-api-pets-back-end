// controllers/petsCtrl.js
const Pet = require('../models/pet.js');
const express = require('express');
const router = express.Router();

const create = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(201).json(newPet);
  } catch (err) {
    // more likely 422 but we will deal with them later (validation not a server error)
    res.status(500).json({ err: err.message });
  }
}

const index = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

module.exports = {
  create,
  index,
}