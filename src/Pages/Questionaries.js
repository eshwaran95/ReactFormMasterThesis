import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {  makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(5),
    width: '500ch',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap'
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
  extField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}







export default function Questionaries() {
  const [value, setValue] = React.useState(0);

 
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();

  return (
    
<div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Pre-session interview" {...a11yProps(0)} />
          <Tab label="Questions" {...a11yProps(1)} />
          <Tab label="Debriefing/Post-Session Interview" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <p>
      <Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="• What does your typical weekday look like?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Daily activities-Office,Travel,lunch..."
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="• What does your typical weekday look like?

          "
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Morning -Time,Evening-Time...."
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card> 
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="What are some of the apps and websites you use the most?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Name of apps-Ex:Gaming apps,Health Apps,TravelApp..."
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card> 
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="• Tell me about your role at your company?

          "
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Title:Engieer,Manager,Superviser..."
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card> 
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Any lifestyle questions that are related to your topic / product.?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Open Question"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card> 
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="How old are you?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Age"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card> 
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="How old are you?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Age"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card> 
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="How old are you?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Age"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card> 
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="How old are you?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Age"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>   


</p>
<button type="button">
         Submit
    </button>
<button type="button">
         Next Section
    </button>
 </TabPanel>

<TabPanel value={value} index={1}>
<p>
<Card className={classes.root}>
<CardContent> 
<FormControl component="fieldset">
      <FormLabel component="legend">What do you think about the Theraphy Builder App? </FormLabel>
      <RadioGroup aria-label="Rating1" name="Rate 1" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea"  control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent> 
<FormControl component="fieldset">
      <FormLabel component="legend">How is the Dialog Flow? </FormLabel>
      <RadioGroup aria-label="Rating1" name="Rate 1" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea"  control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
      <FormLabel component="legend">How do you rate the Medical Advice?</FormLabel>
      <RadioGroup aria-label="Rate" name="Rate 2" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>

<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="• What’s your relationship like with Activities and Things "
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="[topic … e.g. money, ﬁtness, etc]"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>

<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Have you worked with similar devices from competitor products?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="If you could change or improve such devices, what would be the top 3 things you would change?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Design/Colour/Medical Context/DialogFlow!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="• What’s the hardest part about using this product?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Design/Colour/Medical Context/DialogFlow!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did you find the app to help you in real-life situations?"
          style={{ margin: 8 }}
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did you find the app to help you in real-life situations?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did you find the app to help you in real-life situations?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did you find the app to help you in real-life situations?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did you find the app to help you in real-life situations?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did you find the app to help you in real-life situations?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did you find the app to help you in real-life situations?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did the app impede your ability to deal with real-life situations or real-life problems?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Did you feel that you became dependent on the app?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label=" Did you think the responses you gave in the app were authentic?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Do you think this app impedes your likelihood of seeking face-to-face interactions with mental health services?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label=" Did the app discourage you from having face-to-face interactions with your family and/or friends"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="What did you like most about the app?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="How old are you?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Age!"
          fullWidth
          margin="Personal Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="What is your job title?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Profession!"
          fullWidth
          margin="Personal Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="What is your job title?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Profession!"
          fullWidth
          margin="Personal Question"
          InputLabelProps={{
            shrink: true,
          }}
        />

</FormControl>
</CardContent>

</Card>

</p>
<button type="button">
         Submit
    </button>
<button type="button">
         Final Post Interview Section
    </button>

</TabPanel>

<TabPanel value={value} index={2}>
     <p>
     <Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
      <FormLabel component="legend">How do you rate the Main  Questionaries Section </FormLabel>
      <RadioGroup aria-label="Rate" name="Rate 2" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
      <FormLabel component="legend">How do you rate the Pre interview Questions Section? </FormLabel>
      <RadioGroup aria-label="Rate" name="Rate 2" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
      <FormLabel component="legend">How do you rate the Relevence in the past two Section? </FormLabel>
      <RadioGroup aria-label="Rate" name="Rate 2" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
      <FormLabel component="legend">How do you rate asking personal questions? </FormLabel>
      <RadioGroup aria-label="Rate" name="Rate 2" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
      <FormLabel component="legend">Is the Questions in the past two sections were clear to you? </FormLabel>
      <RadioGroup aria-label="Rate" name="Rate 2" value={value} onChange={handleChange}>
        <FormControlLabel value="Good" control={<Radio />} label="Yes" />
        <FormControlLabel value="Bad" control={<Radio />} label="NO" />
        <FormControlLabel value="Could Improve" control={<Radio />} label="Could improve" />
        <FormControlLabel value="No idea" control={<Radio />} label="No idea" />
      </RadioGroup>
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Can you help Us in answering what perticular part we need to improve?"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="Mention any thing which you felt not good or needs improvement"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>

<Card className={classes.root}>
<CardContent>
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Where you comfortable with the personal questions!"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>
<Card className={classes.root}>
<CardContent>
  
<FormControl component="fieldset">
<TextField
          id="standard-full-width"
          label="Was the questions friendly and casual to you"
          style={{ margin: 8 }}
          placeholder="User input"
          helperText="yes/No/Eloborate Answer!"
          fullWidth
          margin="Open Question"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormControl>
</CardContent>
</Card>

     </p>
     <button type="button">
         Submit
    </button>
      </TabPanel>



<Link to="/SelectionOfUseScenario">
    <button type="button">
         Back
    </button>
</Link>
<Link to="/SystemUsabili">
     <button type="button">
          Next
     </button>
 </Link>
</div>
  );
}


