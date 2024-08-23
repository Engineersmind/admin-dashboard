import * as yup from "yup";

export const productSchema = yup.object({
  title: yup.string("Enter your title").required("Title is required"),
  description: yup
    .string("Enter your Description")
    .required("Description is required"),
  price: yup.number("Enter your Price").required("Price is required"),
});
