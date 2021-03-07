import { createAction } from '@reduxjs/toolkit';

// export const addContact = value => ({
//   type: 'Phonebook/Addcontact',
//   payload: value,
// });
// export const deleteContact = value => ({
//   type: 'Phonebook/Deletecontact',
//   payload: value,
// });
// export const filterContact = value => ({
//   type: 'Phonebook/Filtercontact',
//   payload: value,
// });
export const addContact = createAction('Phonebook/Addcontact');
export const deleteContact = createAction('Phonebook/Deletecontact');
export const filterContact = createAction('Phonebook/Filtercontact');
