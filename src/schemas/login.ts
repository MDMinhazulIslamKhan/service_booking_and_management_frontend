import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
});

export const passwordUpdateSchema = yup.object().shape({
  oldPassword: yup.string().min(6).max(32).required("Password is required"),
  newPassword: yup.string().min(6).max(32).required("Password is required"),
});

export const registrationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
  fullName: yup.string().min(6).max(32).required("Name is required"),
  phoneNumber: yup
    .string()
    .min(11)
    .max(14)
    .required("Phone Number is required"),
});

export const registrationTutorSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
  fullName: yup.string().min(6).max(32).required("Name is required"),
  dayPerWeek: yup.number().min(1).max(7).required("Day Per Week is required"),
  expectedMinSalary: yup
    .number()
    .min(500)
    .max(15000)
    .required("Expected Salary is required"),
  maximumTuitionCapacity: yup
    .number()
    .min(1)
    .max(15)
    .required("Max Tuition Capacity is required"),
  currentTuition: yup
    .number()
    .min(0)
    .max(15)
    .required("Current Tuition No is required"),
  phoneNumber: yup
    .string()
    .min(11)
    .max(14)
    .required("Phone Number is required"),
});
