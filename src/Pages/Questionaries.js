import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(5),

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12
  },
}));

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();


  return (
    <div>

<Card className={classes.root}>
<CardContent> 
<FormControl component="fieldset">
      <FormLabel component="legend">What do you think about the Theraohy Builder</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" disabled control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>

<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
      <FormLabel component="legend">What do you think about the Theraohy Builder</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" disabled control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>

<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
      <FormLabel component="legend">What do you think about the Theraohy Builder</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" disabled control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>
</div>
  );
}
