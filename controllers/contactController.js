//@desc Get all contacts
//@route GET /api/contacts
//@acess public

const getContacts=(req, res) => {
    res.status(200).json({message: "Get all contacts"});
};

const createContacts=(req, res) => {
    res.status(201).json({message: "Create contacts"});
};

const getContact=(req, res) => {
    res.status(200).json({message: `Get contacts for ${req.params.id} contacts`});
};

const updateContacts=(req, res) => {
    res.status(200).json({message: `Update contacts for ${req.params.id} contacts`});
};

const deleteContacts=(req, res) => {
    res.status(200).json({message: `Delete contacts for ${req.params.id} contacts`});
};

module.exports={getContacts,createContacts,getContact,updateContacts,deleteContacts};