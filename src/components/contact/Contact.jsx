import React, { useState } from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";

function Contact() {
  const [contacts, setContacts] = useState([
    {
      full_name: "ABC",
      phone_number: "12431",
    },
    {
      full_name: "JBC",
      phone_number: "12124",
    },
    {
      full_name: "LBC",
      phone_number: "1243",
    },
  ]);

  return (
    <div id="container">
      <div id="box">
        <ContactList contacts={contacts} />
        <ContactForm contacts={contacts} addContacts={setContacts} />
      </div>
    </div>
  );
}

export default Contact;
