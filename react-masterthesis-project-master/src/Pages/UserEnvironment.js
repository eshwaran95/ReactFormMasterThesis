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
  createData('List one use environment per line (e.g.: Hospital) ','No light/Only Mobile Device light','','Tasks done using Theraphy Builder'),
  createData('Home','JobTitle','Dim Light','Medical Condition'),
  createData('Car-In Traffic','Bright light','Qualification', 'Knowledge'),
  createData('Office','Sex','Sunlight/Outside',' Dialog Flow w.r.t MedicalContext'),
];

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

export default function UserEnvironment() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    
    <div className={classes.root}>
      <AppBar position="static" style={{zIndex: "0"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Introduction to Use Environment" {...a11yProps(0)} />
          <Tab label="Example of a Use Environment" {...a11yProps(1)} />
          <Tab label="Fill a Use Environment Table" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Use Environment
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Use Environment helps you to understand the situation the user is using the Applicaiton as its a major factor affecting in the user experience or usability of the Product.
        </Typography>
        <Typography variant="body2" component="p">
Some of the main factors of the Use Environment are Lighting,Sound or noise,Social environment like family or colleagues,Medium of intraction example: Gloves,goggles etc,Furnishing example sofa or work table,Distraction like TV or other Medical device, and finally Other Sterile environment.
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
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        <TextField
          label="Dense"
          id="margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
        />
        <TextField
          label="Normal"
          id="margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          label="None"
          id="filled-margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="filled"
        />
        <TextField
          label="Dense"
          id="filled-margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
          variant="filled"
        />
        <TextField
          label="Normal"
          id="filled-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          label="None"
          id="outlined-margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          label="Dense"
          id="outlined-margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
          variant="outlined"
        />
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
      </div>
    </div>
      </TabPanel>
      <Link to="/UiSaftyAndPotentialError">
    <button type="button">
         Next
    </button>
</Link>
<Link to="/PersonaBuilder">
     <button type="button">
          Back
     </button>
 </Link>
    </div>
  );
}