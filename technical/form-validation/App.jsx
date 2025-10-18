import { useState } from "react";
import validate from "./Formvalidation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

export default function App() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } else {
      setShowAlert(false);
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Form submitted successfully!
        </Alert>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={() => {}}
          value={values.email || ""}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={() => {}}
          value={values.password || ""}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <Button className="btn btn-success mt-2" type="submit">
        Submit
      </Button>
    </form>
  );
}