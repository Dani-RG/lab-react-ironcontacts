import './App.css';
import  contactsList from "./contacts.json";
import React, {useState} from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  const pickRandom = () => {
    const randomContact = contactsList[Math.floor(Math.random() * contactsList.length)];
    setContacts([randomContact]);
    const newContacts = [...contacts];
    newContacts.push(randomContact);
    setContacts(newContacts);
  }

  const sortByPopularity = () => {
    const contactsArr = [...contacts];
    contactsArr.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (b.popularity < a.popularity) {
        return -1;
      } else {
      return 0;
      }
    });
    setContacts(contactsArr);
  }

  const sortByName = () => {
    const contactsNames = [...contacts];
    contactsNames.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (b.name < a.name) {
        return 1;
      } else {
      return 0;
      }
    });
    setContacts(contactsNames);
  }

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId
    })
    setContacts(filteredContacts)
  }

  return (
    <div className="App">

      <button onClick={pickRandom}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <h1>IronContacts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td><img src={ contact.pictureUrl } width="100px" alt="contact-pic" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🌟"}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          )
        })}
        </tbody>
      </table>

    </div>
  );
}

export default App;