const express = require('express');
const router = express.Router();
require("dotenv").config();
const Element = require('../models/Element');

const PENCalculator = async (req,res) => {
    try {
        const{number, mass, oxidationStates} = req.body;
        const element = await Element.findOne({ number });
        if (!element) {
                return res.status(404).json({ error: 'Element not found' });
            }
        const proton = element.number;
        const neutron = element.mass - element.number;
        const electron = element.number - element.oxidationStates[0];

        return res.status(200).json({ proton, neutron, electron , element: element.symbol  });
    } catch (err) {
        console.log(err);
        return res.status(400).json({error: 'Server error'})
    }
};

module.exports = {PENCalculator}
