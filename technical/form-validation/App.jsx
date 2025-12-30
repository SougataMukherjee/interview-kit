import { useState } from "react";
import validate from "./Formvalidation";

export default function App() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        style={{ marginTop: "10px" }}
      >
        Submit
      </button>
    </form>
  );
}


// using formik validation
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email address").required("Required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Required"),
// });

// export default function App() {
//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         setTimeout(() => {
//           alert("Form submitted successfully!\n" + JSON.stringify(values, null, 2));
//           setSubmitting(false);
//           resetForm();
//         }, 500);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label>Email</label>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="p" style={{ color: "red" }} />
//           </div>

//           <div>
//             <label>Password</label>
//             <Field type="password" name="password" />
//             <ErrorMessage
//               name="password"
//               component="p"
//               style={{ color: "red" }}
//             />
//           </div>

//           <button type="submit" disabled={isSubmitting} style={{ marginTop: 10 }}>
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// }
