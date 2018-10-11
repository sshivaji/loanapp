import React from "react";

export const FormGroupFirstName = field => {
  return (
    <div className="form-group row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <label htmlFor={field.name}>{field.label}</label>
        <input
          type={field.type}
          id={field.name}
          className="form-control"
          {...field.input}
        />
      </div>
    </div>
  );
};

export const FormGroupLastName = field => {
  return (
    <div className="form-group row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <label htmlFor={field.name}>{field.label}</label>
        <input
          type={field.type}
          id={field.name}
          className="form-control"
          {...field.input}
        />
      </div>
    </div>
  );
};

export const FormGroupEmail = field => {
  return (
    <div className="form-group row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <label htmlFor={field.name}>{field.label}</label>
        <input
          type={field.type}
          id={field.name}
          className="form-control"
          {...field.input}
        />
      </div>
    </div>
  );
};

export const FormGroupUsername = field => {
  return (
    <div className="form-group row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <label htmlFor={field.name}>{field.label}</label>
        <input
          type={field.type}
          id={field.name}
          className="form-control"
          {...field.input}
        />
      </div>
    </div>
  );
};

export const FormGroupPassword = field => {
  return (
    <div className="form-group row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <label htmlFor={field.name}>{field.label}</label>
        <input
          type={field.type}
          id={field.name}
          className="form-control"
          placeholder={field.placeholder}
          {...field.input}
        />
      </div>
    </div>
  );
};
