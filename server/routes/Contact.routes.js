import express from "express";
import { getContacts, getContactById, createContact, updateContact, deleteContact, deleteAllContacts } from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/contacts", getContacts);
router.get("/contacts/:id", getContactById);
router.post("/contacts", createContact);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);
router.delete("/contacts", deleteAllContacts);

export default router;
