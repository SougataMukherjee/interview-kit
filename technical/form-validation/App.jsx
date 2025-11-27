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


// OR using REACT 19 action and useActionState
// import { useActionState } from "react";
// import validate from "./Formvalidation";

// async function formAction(prevState, formData) {
//   const values = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };

//   const errors = validate(values);
//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }

//   // Mimic API call delay
//   await new Promise((res) => setTimeout(res, 1000));

//   return { success: true, errors: {} };
// }

// export default function App() {
//   const [state, formActionDispatch, isPending] = useActionState(formAction, {
//     errors: {},
//     success: false,
//   });

//   return (
//     <form action={formActionDispatch}>
//       <div>
//         <label>Email</label>
//         <input type="email" name="email" />
//         {state.errors.email && (
//           <p style={{ color: "red" }}>{state.errors.email}</p>
//         )}
//       </div>

//       <div>
//         <label>Password</label>
//         <input type="password" name="password" />
//         {state.errors.password && (
//           <p style={{ color: "red" }}>{state.errors.password}</p>
//         )}
//       </div>

//       <button type="submit" disabled={isPending} style={{ marginTop: 10 }}>
//         {isPending ? "Submitting..." : "Submit"}
//       </button>

//       {state.success && <p style={{ color: "green" }}>Form submitted!</p>}
//     </form>
//   );
// }
