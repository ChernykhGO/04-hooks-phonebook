import React, { useState, useEffect, memo } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const formSubmit = data => {
    console.log(data)
    const newContact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };
    console.log(newContact);
    let obj = contacts.find(
      o => o.name.toLowerCase() === data.name.toLowerCase())
    if (!obj) {
      setContacts(contacts => [newContact, ...contacts])
    }
    else {
      alert(`${data.name} is already in contact`);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(
      contact => contact.id !== contactId))
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  };

  return (
    <div>
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={formSubmit}
        />

        <h2>Contacts</h2>

        <Filter value={filter}
          onChange={changeFilter}
        />
        <ContactList
          contacts={visibleContacts()}
          ondeleteContact={deleteContact}
        />
      </div>
    </div>
  )
}

export default memo(App);
