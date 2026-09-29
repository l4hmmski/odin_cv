import { useState } from "react";

import FormField from "./FormField.jsx";
import "../styles/FormSection.css";

const initialData = {
  name: "",
  email: "",
  phone: "",
};

export default function GeneralInfo() {
  const [formData, setFormData] =
    useState(initialData);

  const [isEditing, setIsEditing] =
    useState(true);

  const [hasSubmitted, setHasSubmitted] =
    useState(false);

  function handleChange(event) {
    const { name, value } =
      event.target;

    setFormData(function (
      previousData
    ) {
      return {
        ...previousData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setHasSubmitted(true);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <section className="form-section">
      <div className="section-header">
        <div>
          <p className="section-number">
            01
          </p>

          <h2>
            General information
          </h2>
        </div>

        {hasSubmitted &&
          !isEditing && (
            <button
              className="secondary-button"
              type="button"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <FormField
              label="Full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name
            "
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />

            <FormField
              label="Phone number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0400 000 000"
              required
            />
          </div>

          <button
            className="primary-button"
            type="submit"
          >
            Save information
          </button>
        </form>
      ) : (
        <div className="submitted-content">
          <h3>{formData.name}</h3>

          <p>
            <strong>Email:</strong>{" "}
            {formData.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {formData.phone}
          </p>
        </div>
      )}
    </section>
  );
}