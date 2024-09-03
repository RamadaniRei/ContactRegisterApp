import React, { useState } from "react";

function ContactForm({ contacts, addContacts }) {
  const initialValues = { full_name: "", phone_number: "" };
  const [form, setForm] = useState(initialValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.full_name === "" || form.phone_number === "") {
      alert("Please fill in the blanks!");
      return;
    }

    addContacts([...contacts, form]);
    setForm(initialValues);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.full_name}
        />
      </div>
      <div>
        <input
          type="number"
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
          maxLength="10"
          min="3"
        />
      </div>
      <div id="button">
        <button>Add</button>
      </div>
    </form>
  );
}

export default ContactForm;
