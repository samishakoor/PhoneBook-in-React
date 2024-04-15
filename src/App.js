import React, { useState } from "react";
import Intro from "./intro";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const deleteContact = (index) => {
    if (index >= 0 && index < contacts.length) {
      let newContacts = [...contacts];
      newContacts.splice(index, 1);
      setContacts(newContacts);
    }
  };

  const addContact = () => {
    if (name !== "" && number !== "") {
      const filteredContacts = contacts.filter(
        (contact) => contact.name === name && contact.number === number
      );

      if (filteredContacts.length > 0) {
        alert("Duplicate Name or Contact Number");
      } else {
        const sortedContacts = [...contacts, { name, number }].sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        setContacts(sortedContacts);
      }
      setName("");
      setNumber("");
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleFormDisplay=()=>{
    setName("");
    setNumber("");
    setShowForm(!showForm);    
  }

  return (
    <div id="main">
      <Intro />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-4">
            <div className="App">
              <h2 className="header">PhoneBook</h2>
              <span
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={handleFormDisplay}
              >
                {showForm ? "Hide Contact Form" : "Create New Contact"}
              </span>

              {showForm && (
                <div className="container">
                  <form className="form" onSubmit={addContact}>
                    <div class="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeHolder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeHolder="Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={addContact}
                    >
                      Add
                    </button>
                  </form>
                </div>
              )}

              {contacts.map((contact, index) => (
                <div className="contacts">
                  <div class="contact-details">
                    <h5>{contact.name}</h5>
                    <p>{contact.number}</p>
                  </div>
                  <button
                    class="icon-holder"
                    onClick={() => deleteContact(index)}
                  >
                    <i class="delete fa fa-trash"></i>
                  </button>
                  <hr />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
