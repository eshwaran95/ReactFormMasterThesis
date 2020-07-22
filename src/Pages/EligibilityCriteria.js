import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import CardActions from '@material-ui/core/CardActions';
import {
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
  },
  table: {
    minWidth: 700,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  }

}));

export default function FormControlLabelPosition() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Card className={classes.root}>
    <CardContent>
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
    <button type="button">
         Submit
    </button>
    </CardContent>
     <CardActions>
     <Link to="/personaBuilder">
    <button type="button">
         Next
    </button>
</Link>
<Link to="/Introduction">
     <button type="button">
          Back
     </button>
 </Link>
 </CardActions>
    </Card>
    </div>
  );
}