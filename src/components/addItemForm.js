import React from "react";
import { Field, reduxForm } from "redux-form";

const SimpleForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={pristine || submitting || props.filter === null}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "name" // a unique identifier for this form
})(SimpleForm);
