const express = require('express');
const router = express.Router();

const {CreateCombination, GetAllCombination, UpdateCombination, DeleteCombination, FindCombination} = require('../controllers/CombinationController');

router.post("/create-combination", CreateCombination);
router.get("/get-all-combination", GetAllCombination);
router.post("/update-combination", UpdateCombination);
router.delete("/delete-combination", DeleteCombination);
router.post("/find", FindCombination);

module.exports = router;