import * as Yup from "yup";

export const msgSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string()
    .min(2, "Invalid full name")
    .required("Institution name is required"),
  msg: Yup.string()
    .min(3, "Message must be 5 characters at minimum")
    .required("Message is required"),
});

export const preRegisterSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string()
    .min(2, "Invalid institution name")
    .required("Full name is required"),
});
