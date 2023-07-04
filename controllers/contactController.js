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
    const contacts=await contact.findById(req.params.id);
    if(!contacts){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contacts);
});

const updateContacts=asyncHandler(async(req, res) => {
    const contacts=await contact.findById(req.params.id);
    if(!contacts){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedcontacts=await contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(200).json(updateContacts);
});

const deleteContacts=asyncHandler(async (req, res) => {
    const contacts=await contact.findById(req.params.id);
    if(!contacts){
        res.status(404);
        throw new Error("Contact not found");
    }
    await contacts.remove();

    res.status(200).json(contacts);
});

module.exports={getContacts,createContacts,getContact,updateContacts,deleteContacts};