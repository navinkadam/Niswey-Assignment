const Yup = require("yup");

async function validatePayload(params) {
  try {
    const schema = Yup.array(
      Yup.object().shape({
        name: Yup.string().min(3, "Too short.").required("Name is required"),
        lastName: Yup.string()
          .min(3, "Too short")
          .required("Last Name is required"),
        phone: Yup.string().required("Phone is required"),
      })
    ).min(1, "At least one contact required.");
    return await schema.validate(params, {
      stripUnknown: true,
      disableStackTrace: true,
    });
  } catch (error) {
    const [positions] = error.path.split(".");
    const errorMessage = error.message + " at the " + positions + " position.";
    throw { msg: errorMessage, status: 403 };
  }
}

async function validatePayloadList(params) {
  const schema = Yup.object().shape({
    skip: Yup.number().default(0),
    take: Yup.number().default(20),
  });
  return await schema.validate(params, {
    stripUnknown: true,
  });
}

async function validatePayloadUpdateContact(params) {
  const schema = Yup.object().shape({
    id: Yup.string().required("Id is required"),
    name: Yup.string().min(3, "Too short.").required("Name is required"),
    lastName: Yup.string()
      .min(3, "Too short")
      .required("Last Name is required"),
  });
  return await schema.validate(params, {
    stripUnknown: true,
  });
}

module.exports = {
  validatePayload,
  validatePayloadList,
  validatePayloadUpdateContact,
};
