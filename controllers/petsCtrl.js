// controllers/petsCtrl.js
const Pet = require('../models/pet.js');

const create = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(201).json(newPet);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const index = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const show = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({ err: "Pet not found." });
    }

    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body);

    if (!pet) {
      return res.status(404).json({ err: "Pet not found." });
    }

    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);

    if (!pet) {
      return res.status(404).json({ err: "Pet not found." });
    }

    res.status(204).send();

  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  create,
  index,
  show,
  update,
  deletePet
};