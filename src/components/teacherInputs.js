import React from "react";

const TeacherInputs = () => {
  return (
    <div>
      <label htmlFor="schoolName" className="sr-only">
        School Name
      </label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        className="form-control"
        placeholder="School Name"
        required
      />
      <label htmlFor="districtName" className="sr-only">
        District Name
      </label>
      <input
        type="text"
        id="districtName"
        name="districtName"
        className="form-control"
        placeholder="District Name"
        required
      />
    </div>
  );
};

export default TeacherInputs;
