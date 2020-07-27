import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

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
  },
  buttonStyle: {
    margin: '0 auto',
    backgroundColor: '#007348d4',
    color: 'white'
  },

}));

export default function FormControlLabelPosition() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Card className={classes.root}>
    <CardContent style={{padding: '30px'}}>
    <FormControl component="fieldset">
    <Typography variant="h5"  component="h2" style={{padding: '20px'}}>Eligibility Criteria</Typography>
          <FormGroup aria-label="position" >
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="You are not a disabled person?"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Are you taking this Test alone?"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Are you above 14 years old? "
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Do you agree to share your data with us for statistical research purposes?"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
    </CardContent>
 <CardActions style={{width: '100%'}}>

<Button className={classes.buttonStyle} href="/Introduction">Back</Button>
<Button className={classes.buttonStyle}>Learn More</Button>
<Button href="/personaBuilder" className={classes.buttonStyle}>Next</Button>
</CardActions>

    </Card>
    </div>
  );
}