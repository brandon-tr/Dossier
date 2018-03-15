import React from "react";
import { Field, reduxForm } from "redux-form";

const TabForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tab</label>
        <div>
          <Field
            name="tab"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "tab" // a unique identifier for this form
})(TabForm);
