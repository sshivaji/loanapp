import React from "react";

export const FormEmail = field => {
  return (
    <div>
      <label htmlFor={field.name} className="sr-only">
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.name}
        className="form-control"
        placeholder={field.placeholder}
        required
        autoFocus
        {...field.input}
      />
    </div>
  );
};

export const FormPassword = field => {
  return (
    <div>
      <label htmlFor={field.name} className="sr-only">
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.name}
        className="form-control"
        placeholder={field.placeholder}
        required
        {...field.input}
      />
    </div>
  );
};
