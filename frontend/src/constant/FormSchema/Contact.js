import * as Yup from "yup";

export default Yup.array(
  Yup.object().shape({
    name: Yup.string().min(3, "Too short.").required("Name is required"),
    lastName: Yup.string()
      .min(3, "Too short")
      .required("Last Name is required"),
    phone: Yup.string().required("Phone is required"),
  })
).min(1, "At least one contact required.");
