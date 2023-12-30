const express = require('express');
require("dotenv").config();
const Combination = require("../models/Combination");

//Create Combination
const   CreateCombination = async (req,res) => {
    try {
        const{name, elements, category , desc , img} = req.body;
        const combination = new Combination({
            name, 
            elements, 
            category,
            desc,
            img
        });
        await combination.save();
        return res.status(200).json({ message: 'Created successfully'});
    } catch (err) {
        console.log(err);
        return res.status(400).json({success: false, message: "Error"});
    }
};

const GetAllCombination = async (req,res) => {
    try {
        const combination = await Combination.find({});
        return res.status(200).send(combination);
    } catch (err) {
        console.log(err)
        return res.status(400).json({success: false, message: "Error"});
    }
}

const FindCombination = async (req,res) => {
    try {
        const {elementA,elementB} = req.body;
        
        const combination = await Combination.find({});
        const result = combination.filter((item)=>{  
            if(item.elements.includes(elementA) && item.elements.includes(elementB)){
            return item;
            }
        })
        
        if(!result[0]){
            return res.status(404).send("Can not found");
        }
        res.status(200).json({success: true, data: result});
    } catch(err) {
        console.log(err);
        res.status(400).send("Error");
    }
};

const UpdateCombination = async (req,res) => {
    try{
        const {_id,...rest} = req.body;
        const combination = await Combination.findOne({ id: _id });
        if(!combination){
            return res.status(404).send("Somethings Wrong Can Not found");
        }
        await Combination.updateOne({ id: _id }, rest);
        return res.status(200).send("Success");
    } catch(err) {
        console.log(err);
        return res.status(400).send("Error");     
    }
};

const DeleteCombination = async (req,res) => {
    try {
        const { _id } = req.body;
        const combination = await Combination.findOne({ id: _id });
        if(!combination){
            return res.status(400).send("Can not found");
        }
        await combination.remove();
        res.status(200).send("Deleted success");
    } catch (err) {
        console.log(err);
        res.status(400).send("Fail");
    }
};

module.exports = {CreateCombination, FindCombination, GetAllCombination, UpdateCombination, DeleteCombination}