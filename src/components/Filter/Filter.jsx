import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = props => {
  const { changeFilterHandler, filter } = props;
  return (
    <div className={style.filter}>
      <h2>Find contacts by name</h2>
      <input type="text" onChange={changeFilterHandler} value={filter} />
    </div>
  );
};
Filter.propTypes = {
  changeFilterHandler: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
