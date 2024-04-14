const express = require("express");
const router = express.Router();
const ContactService = require("../../services/contact");
const { getErrorPayload } = require("../../utils/errorUtil");

async function createContact(req, res) {
  try {
    const payload = req.body;

    const result = await ContactService.insertBulkContact(payload);
    return res
      .status(201)
      .json({ msg: "Contact successfully store.", data: result });
  } catch (error) {
    const { status, ...rest } = getErrorPayload(error);
    res.status(status).json({ ...rest });
  }
}

async function updateContact(req, res) {
  try {
    const payload = req.body;
    payload.id = req.params.id;
    await ContactService.updateContact(payload);
    return res.status(200).json({ msg: "Contact successfully updated." });
  } catch (error) {
    const { status, ...rest } = getErrorPayload(error);
    res.status(status).json({ ...rest });
  }
}

async function listContact(req, res) {
  try {
    const payload = req.query;
    const result = await ContactService.getAllContact(payload);
    return res
      .status(200)
      .json({ msg: "Contact list successfully fetched.", data: result });
  } catch (error) {
    const { status, ...rest } = getErrorPayload(error);
    res.status(status).json({ ...rest });
  }
}

async function deleteContact(req, res) {
  try {
    const result = await ContactService.deleteContact(req.params.id);
    return res
      .status(200)
      .json({ msg: "Contact successfully deleted.", data: result });
  } catch (error) {
    const { status, ...rest } = getErrorPayload(error);
    res.status(status).json({ ...rest });
  }
}

router.post("/", createContact);
router.put("/:id", updateContact);
router.get("/", listContact);
router.delete("/:id", deleteContact);

module.exports = router;
