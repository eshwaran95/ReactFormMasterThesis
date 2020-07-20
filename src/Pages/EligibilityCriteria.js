import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Eligilibity Criteria </FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="You are not a disabled person"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="You are taking this Test alone"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
          label="you are above 18yrs old and not a minor "
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="You agree to share your data with us"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}