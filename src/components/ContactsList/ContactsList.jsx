import { ContactItem } from '.';
import { ListByContacts } from './ContactsList.styled';

export function ContactsList({ contacts = [], handleDelete }) {
  return (
    <ListByContacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          handleDelete={() => handleDelete(id)}
        />
      ))}
    </ListByContacts>
  );
}
