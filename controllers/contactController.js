//@desc Get all contacts
//@route GET /api/contacts
//@acess public
const asyncHandler=require('express-async-handler');
const contact=require("../models/contactModels")

const getContacts= asyncHandler(async (req, res) => {
    const contacts=await contact.find();
    res.status(200).json(contacts);
});

const createContacts=asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const {name,email,phone}=req.body;
    if(!name,!email,!phone){
        res.status(400);
        throw new Error("All fields are necessary");
    }
    const contacts= await contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contacts);
});

const getContact=asyncHandler( async (req, res) => {
    res.status(200).json({message: `Get contacts for ${req.params.id} contacts`});
});

const updateContacts=asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update contacts for ${req.params.id} contacts`});
});

const deleteContacts=asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete contacts for ${req.params.id} contacts`});
});

module.exports={getContacts,createContacts,getContact,updateContacts,deleteContacts};