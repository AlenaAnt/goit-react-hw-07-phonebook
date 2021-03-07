// import { createStore } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './action';

const lsKey = 'contacts';
const initialstate = () => {
  let contacts = [];
  if (localStorage.getItem(lsKey)) {
    contacts = JSON.parse(localStorage.getItem(lsKey));
  }
  return {
    contacts: contacts,
    filter: '',
  };
};
const readState = initialstate();
// const contactsReducer = (state = readState.contacts, { type, payload }) => {
//   //const { contacts } = state;
//   switch (type) {
//     // case 'Phonebook/Addcontact':
//     //   localStorage.setItem(lsKey, JSON.stringify([...state, payload]));
//     //   return {
//     //     contacts: [...state, payload],
//     //   };
//     // case 'Phonebook/Deletecontact':
//     //   const filterConttact = state.filter(contact => contact.id !== payload);
//     //   localStorage.setItem(lsKey, JSON.stringify(filterConttact));
//     //   return {
//     //     contacts: filterConttact,
//     //   };
//     case 'Phonebook/Addcontact':
//       localStorage.setItem(lsKey, JSON.stringify([...state, payload]));
//       return [...state, payload];
//     case 'Phonebook/Deletecontact':
//       const filterConttact = state.filter(contact => contact.id !== payload);
//       localStorage.setItem(lsKey, JSON.stringify(filterConttact));
//       return filterConttact;
//     default:
//       return state;
//   }
// };

// const contactsReducer = (state = readState.contacts, { type, payload }) => {
//   switch (type) {
//     case 'Phonebook/Addcontact':
//       localStorage.setItem(lsKey, JSON.stringify([...state, payload]));
//       return [...state, payload];
//     case 'Phonebook/Deletecontact':
//       const filterConttact = state.filter(contact => contact.id !== payload);
//       localStorage.setItem(lsKey, JSON.stringify(filterConttact));
//       return filterConttact;
//     default:
//       return state;
//   }
// };
const addContactFormState = (state, { payload }) => {
  localStorage.setItem(lsKey, JSON.stringify([...state, payload]));
  return [...state, payload];
};
const deleteContactFormState = (state, { payload }) => {
  const filterConttact = state.filter(contact => contact.id !== payload);
  localStorage.setItem(lsKey, JSON.stringify(filterConttact));
  return filterConttact;
};
const contactsReducer = createReducer(readState.contacts, {
  [addContact]: addContactFormState,
  [deleteContact]: deleteContactFormState,
});

// const filterReducer = (state = readState.filter, { type, payload }) => {
//   switch (type) {
//     case 'Phonebook/Filtercontact':
//       return payload;
//     default:
//       return state;
//   }
// };

const filterReducer = createReducer(readState.filter, {
  [filterContact]: (_, action) => action.payload,
});

// const store = createStore(reducer);
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
