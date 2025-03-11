import Contact from "../models/contact.model.js";

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().select("-__v");
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch contacts" });
    }
};

// Get contact by ID
export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id).select("-__v");
        if (!contact) return res.status(404).json({ error: "Contact not found" });

        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json({ error: "Error fetching contact" });
    }
};

// Create new contact (Returns Success Message)
export const createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: "Contact successfully recorded!" });
    } catch (err) {
        res.status(400).json({ error: "Error creating contact" });
    }
};

// Update contact by ID (Returns Updated Contact)
export const updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-__v");
        if (!updatedContact) return res.status(404).json({ error: "Contact not found" });

        res.status(200).json(updatedContact);
    } catch (err) {
        res.status(500).json({ error: "Error updating contact" });
    }
};

// Delete contact by ID (Returns Success Message)
export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) return res.status(404).json({ error: "Contact not found" });

        res.status(200).json({ message: "Contact deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting contact" });
    }
};

// Delete all contacts (Returns Success Message)
export const deleteAllContacts = async (req, res) => {
    try {
        await Contact.deleteMany();
        res.status(200).json({ message: "All contacts deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting all contacts" });
    }
};
