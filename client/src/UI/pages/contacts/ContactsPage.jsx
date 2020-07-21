//rafc
import React from "react";
import Contacts from "../../components/contacts/Contacts";

const ContactsPage = () => {
  return (
    <div className="grid-2">
      <h2>Contact Keeper</h2>
      <div>{/* ContactForm */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default ContactsPage;
