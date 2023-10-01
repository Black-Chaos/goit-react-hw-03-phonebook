import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({
      ...this.state,
      id: nanoid(),
    }) &&
      this.setState({
        name: '',
        number: '',
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          <span>Number:</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            required
            onChange={this.handleChange}
          />
        </Label>
        <button className="btn">Add contact</button>
      </Form>
    );
  }
}
