import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  return (
   <TextField 
      id="outlined-basic" 
      label={props.label}
   />
  );
};

export default TextInput;

TextInput.propTypes = {
   label: PropTypes.string
};

TextInput.defaultProps = {
   label: null
}