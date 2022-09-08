import React from 'react';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import PropTypes from 'prop-types';

const TextInput = (props) => {
console.log((props.formik.errors[props.name] !== undefined || props.formik.errors[props.name]) !== "" && props.formik.submitCount !== 0);

  return (
   <>
      <TextField 
         id={props.name}
         label={props.label}
         name={props.name}
         onChange={props.formik.handleChange}
         value={props.formik.values[props.name]}
         error={(props.formik.errors[props.name] !== undefined || props.formik.errors[props.name]) && props.formik.submitCount !== 0}
         helperText={((props.formik.errors[props.name] !== undefined || props.formik.errors[props.name]) && props.formik.submitCount !== 0) && props.formik.errors[props.name]}
         type={props.type} 
      />
   </>
  );
};

export default TextInput;

TextInput.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string.isRequired,
   formik: PropTypes.object.isRequired,
   type: PropTypes.string
};

TextInput.defaultProps = {
   label: null,
   type: 'text'
}