const express = require('express');
const router = express.Router();

const {verifyToken, verifyAdmin} = require('../utils/verify');
const {ListElements, FindAElement, UpdateElement, CreateElement, DeleteElement} = require('../controllers/ElementController');

router.get("/list-elements", ListElements);
router.post("/find-element", FindAElement);
router.post("/update-element", UpdateElement);
router.post("/create-element", CreateElement);
router.delete("/delete-element",DeleteElement);

module.exports = router;