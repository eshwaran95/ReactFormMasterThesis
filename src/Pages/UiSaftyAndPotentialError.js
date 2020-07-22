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
  createData('E.g.: series of display screens that the user has to navigate through','E.g.: User sets wrong theraphy ','E.g.: User oversees unit because delimiter is too small (as part of the font ','E.g.: Patient receives wrong amount of medication','E.g.: Death (SL 5: catastrophic)')];

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

export default function UiSaftyAndPotentialError() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Introduction to Ui Safty and Potential Error" {...a11yProps(0)} />
          <Tab label="Example of a Ui Safty and Potential Error" {...a11yProps(1)} />
          <Tab label="Fill a Ui Safty and Potential Error table" {...a11yProps(2)} />
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
        The purpose is to List all user interface characteristics related to safety and potential use errors here or reference to an external document (e.g. “Risk table”).
        </Typography>
        <Typography variant="body2" component="p">
         The Main Components are UI-characteristic related to safety/use errors (primary operating functions),Possible use error with respect to UI-characteristi,Root cause, Hazardous situation & Harm and severity level (SL)
          <br />
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
            <StyledTableCell>UI-characteristic related to safety/use errors (primary operating functions)</StyledTableCell>
            <StyledTableCell align="right">Possible use error with respect to UI-characteristic</StyledTableCell>
            <StyledTableCell align="right">Root cause</StyledTableCell>
            <StyledTableCell align="right">Hazardous situation</StyledTableCell>
            <StyledTableCell align="right">Harm and severity level (SL)</StyledTableCell>
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
          id="outlined-full-width"
          label="UI-characteristic related to safety/use errors (primary operating functions)"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g.: series of display screens that the user has to navigate through"
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
          label="Possible use error with respect to UI-characteristic"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g.: User sets wrong flow rate of infusion pump"
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
          label="Root cause"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g.: User oversees unit because delimiter is too small (as part of the font)"
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
          label="Hazardous situation"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g.: Patient receives wrong amount of medication"
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
          label="Harm and severity level (SL)"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="E.g.: Death (SL 5: catastrophic)"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
              <button type="button">
         Submit
    </button>
      </div>

              
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