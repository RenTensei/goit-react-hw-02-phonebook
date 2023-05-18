import { ContactList } from 'components/ContactList/ContactList';
import { PhonebookForm } from 'components/Form/Form';
import { Component } from 'react';
import { GlobalStyles } from './App.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = contactInfo => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contactInfo, id: nanoid() }],
    }));
  };

  deleteSavedContact = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
    }));
  };

  updateFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <GlobalStyles>
        <PhonebookForm addNewContact={this.addNewContact} />
        <ContactList
          contacts={filteredContacts}
          updateFilter={this.updateFilter}
          deleteSavedContact={this.deleteSavedContact}
        />
      </GlobalStyles>
    );
  }
}
