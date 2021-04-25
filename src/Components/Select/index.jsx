import PropTypes from 'prop-types';
import {
  Select as MaterialSelect,
  InputLabel,
  FormControl,
} from '@material-ui/core';

import useStyles from './styles';

export default function Select({ label, children, labelId, ...props }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <MaterialSelect {...props} labelId={labelId}>
        {children}
      </MaterialSelect>
    </FormControl>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  labelId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

Select.defaultProps = {
  label: 'Select',
  labelId: 'labelId',
};
