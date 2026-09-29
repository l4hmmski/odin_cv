import { useState } from "react";

import FormField from "./FormField.jsx";
import "../styles/FormSection.css";

const initialData = {
  school: "",
  qualification: "",
  startDate: "",
  endDate: "",
};

export default function Education() {
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
            02
          </p>

          <h2>Education</h2>
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
              label="School or university"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="University name"
              required
            />

            <FormField
              label="Title of study"
              name="qualification"
              value={
                formData.qualification
              }
              onChange={handleChange}
              placeholder="Bachelor of Education"
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
          </div>

          <button
            className="primary-button"
            type="submit"
          >
            Save education
          </button>
        </form>
      ) : (
        <div className="submitted-content">
          <h3>
            {formData.qualification}
          </h3>

          <p>{formData.school}</p>

          <p className="date">
            {formData.startDate}
            {" — "}
            {formData.endDate}
          </p>
        </div>
      )}
    </section>
  );
}