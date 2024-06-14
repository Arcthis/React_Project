const express = require('express');
const router = express.Router();
const Prods = require('../models/Prods');

router.get('/', async (req, res) => {
    try {
      const productions = await Prods.find();
      res.json(productions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;