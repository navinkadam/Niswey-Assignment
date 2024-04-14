const Models = require("../../models");
const contactHelper = require("./helper");

async function insertBulkContact(params) {
  const payload = await contactHelper.validatePayload(params);
  const result = await Models.Contact.insertMany(payload);
  return result;
}

async function getAllContact(params) {
  const payload = await contactHelper.validatePayloadList(params);

  const { skip, take } = payload;
  const results = await Models.Contact.find({})
    .skip(skip)
    .limit(take + 1)
    .sort({ createdAt: -1 })
    .lean();

  const resultLength = results?.length;
  const hasNext = resultLength === take + 1;
  if (hasNext && results instanceof Array) results?.pop();

  return { list: results, hasNext };
}

async function getContactById(id) {
  if (!id) throw { msg: "Id is required." };
  const result = await Models.Contact.findOne({ _id: id }).lean();
  if (!result) throw { msg: "Document not found." };
  return result;
}

async function deleteContact(id) {
  const result = await getContactById(id);
  await Models.Contact.deleteOne({ _id: result._id });
}

async function updateContact(params) {
  const payload = await contactHelper.validatePayloadUpdateContact(params);
  const result = await getContactById(payload.id);

  await Models.Contact.updateOne(
    { _id: result._id },
    { $set: { name: payload.name, lastName: payload.lastName } }
  );
}

module.exports = {
  insertBulkContact,
  getAllContact,
  deleteContact,
  updateContact,
};
