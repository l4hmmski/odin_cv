import { useState } from "react";

import FormField from "./FormField.jsx";
import "../styles/FormSection.css";

const initialData = {
  company: "",
  position: "",
  responsibilities: "",
  startDate: "",
  endDate: "",
};

export default function Experience() {
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
            03
          </p>

          <h2>
            Practical experience
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
              label="Company name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company name"
              required
            />

            <FormField
              label="Position title"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Teacher"
              required
            />

            <FormField
              label="Start date"
              name="startDate"
              type="month"
              value={formData.startDate}
              onChange={handleChange}
              required
            />

            <FormField
              label="End date"
              name="endDate"
              type="month"
              value={formData.endDate}
              onChange={handleChange}
              required
            />

            <label className="form-field full-width">
              <span>
                Main responsibilities
              </span>

              <textarea
                name="responsibilities"
                value={
                  formData.responsibilities
                }
                onChange={handleChange}
                placeholder="Describe your main responsibilities..."
                rows="5"
                required
              ></textarea>
            </label>
          </div>

          <button
            className="primary-button"
            type="submit"
          >
            Save experience
          </button>
        </form>
      ) : (
        <div className="submitted-content">
          <h3>{formData.position}</h3>

          <p>{formData.company}</p>

          <p className="date">
            {formData.startDate}
            {" — "}
            {formData.endDate}
          </p>

          <p>
            {formData.responsibilities}
          </p>
        </div>
      )}
    </section>
  );
}