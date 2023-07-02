const express=require("express");
const router=express.Router();
const {getContacts} =require("../controllers/contactController");
const {getContact} =require("../controllers/contactController");
const {updateContacts} =require("../controllers/contactController");
const {deleteContacts} =require("../controllers/contactController");
const {createContacts} =require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/").post(createContacts);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContacts);

router.route("/:id").delete(deleteContacts);

module.exports=router;