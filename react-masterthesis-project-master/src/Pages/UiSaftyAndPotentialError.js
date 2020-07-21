import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  // eslint-disable-next-line no-undef
  createData('Measurning Depression level','Physician,Nurse','Hospital or patients home','Device is ready for use','Welcome dialog is displayed','Switch on the device','Non-Hazard situation'),
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
  },
  table: {
    minWidth: 2000,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  }

}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Introduction to Use Scenario " {...a11yProps(0)} />
          <Tab label="Example of a Use Scenario" {...a11yProps(1)} />
          <Tab label="Fill a Use Scenario table" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Use Scenarios
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        The purpose of personas is to create reliable and realistic representations of your key audience segments for reference. These representations should be based on qualitative and some quantitative user research and web analytics. Remember, your personas are only as good as the research behind them. Effective personas:
        </Typography>
        <Typography variant="body2" component="p">
        Describe in the following table use scenarios for each user group. There are typically about 7 +/- 2 tasks per use scenario. Describe the pre- and post-conditions for each use scenario. You may subdivide complex tasks further into subtasks. Make sure that the tasks cover all aspects of the use scenario if applicable (e.g. task planning, task preparation, task execution, post-processing, evaluation of the results, and optionally distribution of results).
The column “Hazard-related / not hazard-related” needs to be filled out once potential harms caused by use errors have been identified in chapter 10.

          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title of Use scenario</StyledTableCell>
            <StyledTableCell align="right">User group(s)</StyledTableCell>
            <StyledTableCell align="right">Use environment</StyledTableCell>
            <StyledTableCell align="right">Pre-condition (Where does the task start?)</StyledTableCell>
            <StyledTableCell align="right">Post-condition (intended outcome)</StyledTableCell>
            <StyledTableCell align="right">Tasks</StyledTableCell>
            <StyledTableCell align="right">Hazard-related / not hazard-related</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={classes.root}>
      <div>
      <TextField
          id="standard-full-width"
          label="ID"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Ex: 1"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
          id="filled-full-width"
          label="Title of Use Scenario"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g:Measurmeng Depression level"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-full-width"
          label="Use Group"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g: Physician"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-full-width"
          label="Use Environment"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Patients Home"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-full-width"
          label="Pre-condition (Where does the task start?)"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g: After launching the applicaiton"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-full-width"
          label="Post-condition (intended outcome)"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g: Welcome page or dialog should be displaied"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-full-width"
          label="Tasks"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g: Switching on the device "
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Hazard-related "
          labelPlacement="start"
        />
              <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Not-Hazard-related "
          labelPlacement="start"
        />
              
    </div>
      </TabPanel>
      <Link to="/KnownHazard">
    <button type="button">
         Next
    </button>
</Link>
<Link to="/UseEnvironment">
     <button type="button">
          Back
     </button>
 </Link>
    </div>
  );
}