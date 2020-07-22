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
  createData('List Name of Use scenario','Test Scenario Name'),

];
//const rows2 = [
  // eslint-disable-next-line no-undef
  //createData2('1','Unpacking device','All components are unpacked','☐ Passed ☐ Failed ☐ Close Call',''),
  // eslint-disable-next-line no-undef
  //createData2('2', 'Inserting batteries','Batteries are inserted correctly and battery lid is closed again.','☐ Passed ☐ Failed ☐ Close Call','Medical Condition',''),
//];

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
          <Tab label="Introduction to Selection of Use Scenarios" {...a11yProps(0)} />
          <Tab label="Example of a Selection of Use Scenarios" {...a11yProps(1)} />
          <Tab label="Fill a Selection of Use Scenarios table" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Selection Of Use Scenario 
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        List use scenarios which shall be included in usability test here.
        </Typography>
        <Typography variant="body2" component="p">
        The main components here are Use Scenario-Here you need to name the use scenario and Test Scenatio-Here you need to also the respective use scenario.
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
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Use Scenario</StyledTableCell>
            <StyledTableCell align="right">Test Scenario</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Tasks</StyledTableCell>
            <StyledTableCell align="right">Pass/Fail Criteria</StyledTableCell>
            <StyledTableCell align="right">Passed, Failed, Close Call</StyledTableCell>
            <StyledTableCell align="right">Comments</StyledTableCell>
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
          label="Use Scenario	"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Name "
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
          label="Test Scenario"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Name"
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
          helperText="Switch on the device"
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
          label="Comments"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Switched on-launched sucessfully"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
              <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Task-Passed  "
          labelPlacement="start"
        />
              <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Task-Failed "
          labelPlacement="start"
        />
         <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Task-Close Call "
          labelPlacement="start"
        />
        <div>
        <TextField
          id="outlined-full-width"
          label="Comments"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Something you want to add"
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
    </div>
      </TabPanel>
      <Link to="/TestIntroduction">
    <button type="button">
         Back
    </button>
</Link>
<Link to="/Questionaries">
     <button type="button">
          Next
     </button>
 </Link>
    </div>
  );
}