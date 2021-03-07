import React, { useState } from 'react';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = props => {
  const { submitHandler } = props;
  const initialState = { name: '', number: '' };
  const [state, setState] = useState(initialState);
  const changeHandler = event => {
    const { name, value } = event.currentTarget;
    event.preventDefault();
    setState({
      ...state,
      [name]: value,
    });
  };

  const { name, number } = state;
  return (
    <form
      className={style.contact_form}
      onSubmit={event => {
        submitHandler(event, state);
        setState(initialState);
      }}
    >
      <label htmlFor="name">
        Name
        <input type="text" name="name" onChange={changeHandler} value={name} />
      </label>
      <label htmlFor="number">
        Number
        <input
          type="text"
          name="number"
          onChange={changeHandler}
          value={number}
        />
      </label>
      <button type="sumbit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default ContactForm;
