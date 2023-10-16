const express = require("express");
const {
  createContact,
  fetchAllContacts,
  deleteContact,
  updateContact,
} = require("../controller/contactController");

const router = express.Router();

router.get("/", fetchAllContacts);
router.post("/", createContact);
router.post("/delete/:id", deleteContact);
router.post("/update", updateContact);
module.exports = router;
