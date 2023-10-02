import { Component } from 'react';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList, ContactItem } from 'components/ContactsList';

const LS_KEY = 'phone-book';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (contacts) {
      this.setState({contacts})
    }
  }
  componentDidUpdate(_, state) {
    if (this.state.contacts !== state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts))
    }
  }

  addContact = contact => {
    if (this.state.contacts.some(({ name }) => name === contact.name)) return alert(`${contact.name} is already in contacts`);
    (this.setState(({ contacts }) => ({ contacts: [...contacts, contact] })));
    return true
  };

  handleFilter = e =>
    this.setState({
      filter: e.target.value.toLowerCase(),
    });

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    } else {
      return contacts;
    }
  };

  deleteContact = contactId =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));

  render() {
    return (
      <>
        <h1 className="title">Phonebook</h1>
        <Container>
          <div className="form-container">
            <ContactForm addContact={this.addContact} />
            <Filter val={this.state.filter} handleFilter={this.handleFilter} />
          </div>
          <div className="contacts-container">
            <h2 className="title">Contacts</h2>
            <ContactsList>
              {this.filteredContacts().map(({ id, name, number }) => (
                <ContactItem
                  key={id}
                  name={name}
                  number={number}
                  handleDelete={() => this.deleteContact(id)}
                />
              ))}
            </ContactsList>
          </div>
        </Container>
      </>
    );
  }
}
