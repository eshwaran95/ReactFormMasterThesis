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
          value="end"
          control={<Checkbox color="primary" />}
          label="You are not a disabled person!"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Are you taking this Test alone!"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="you are above 14yrs old? "
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Are you agreeing to share your data with us!"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}