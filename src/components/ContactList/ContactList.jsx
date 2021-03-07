import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = props => {
  const { contacts, deleteContact } = props;
  console.log(contacts);
  return (
    <>
      <ul className={style.contact_list}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}, {contact.number}{' '}
            <button
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
