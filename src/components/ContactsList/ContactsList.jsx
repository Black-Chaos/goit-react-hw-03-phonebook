import { ContactItem } from '.';
import { ListByContacts } from './ContactsList.styled';

export function ContactsList({ contacts = [] }) {
  return (
    <ListByContacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          handleDelete={() => this.deleteContact(id)}
        />
      ))}
    </ListByContacts>
  );
}
