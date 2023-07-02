const express=require("express");
const router=express.Router();
const {getContacts} =require("../controllers/contactController");
const {getContact} =require("../controllers/contactController");
const {updateContacts} =require("../controllers/contactController");
const {deleteContacts} =require("../controllers/contactController");
const {createContacts} =require("../controllers/contactController");

router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContact).put(updateContacts).delete(deleteContacts);
module.exports=router;