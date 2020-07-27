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
  createData('E.g:List one user group per line','Background','Abilities','Tasks done using Theraphy Builder'),
  createData('E.g:Physician','JobTitle','Education Required','Medical Condition'),
  createData('E.g:Nurse','Age','Qualification', 'Knowledge'),
  createData('E.g:Technician','Sex','Experience With Medical Device',' Dialog Flow w.r.t MedicalContext'),
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
  },
  buttonStyle: {
    margin: '0 auto',
    backgroundColor: '#007348d4',
    color: 'white'
  },

}));

export default function PersonaBuilder() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    
    <div className={classes.root}>
      <AppBar position="static" style={{zIndex: "0"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Introduction to Persona" {...a11yProps(0)} />
          <Tab label="Example of a Persona" {...a11yProps(1)} />
          <Tab label="Fill a Persona" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5"  component="h2" style={{padding: '20px'}}>Personas</Typography>
        <Typography variant="body1" component="p">
        The purpose of personas is to create reliable and 
        realistic representations of your key audience 
        segments for reference. These representations 
        should be based on qualitative and some 
        quantitative user research and web analytics. 
        Remember, your personas are only as good 
        as the research behind them. Effective personas:
        </Typography>
        <Typography variant="body1" component='p'>
          <ul style={{padding: '20px'}}>
            <li>Represent a major user group for your website/application</li>
            <li>Express and focus on the major needs and expectations of the most important user groups</li>
            <li>Give a clear picture of the user's expectations and how they're likely to use the site</li>
            <li>Aid in uncovering universal features and functionality</li>
            <li> Describe real people with backgrounds, goals, and values</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions style={{width: '100%'}}>

          <Button className={classes.buttonStyle} href="/EligibilityCriteria">Back</Button>
        <Button className={classes.buttonStyle}>Learn More</Button>
        <Button href="/UserEnvironment" className={classes.buttonStyle}>Next</Button>
      </CardActions>
    </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title of user group</StyledTableCell>
            <StyledTableCell align="right">Demographic data</StyledTableCell>
            <StyledTableCell align="right">Expected/Intended qualification,job experience, skills</StyledTableCell>
            <StyledTableCell align="right">Anticipated tasks and their frequency (related to the medical device)</StyledTableCell>
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
          id="outlined-full-width"
          label="Title of user group"
          placeholder="e.g. Student"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />    
        <TextField
          id="standard-full-width"
          label="Demographic data"
          placeholder="Job"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />
        <TextField
          id="standard-full-width"
          label="Demographic data"
          placeholder="Gender"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />
        <TextField
          id="standard-full-width"
          label="Demographic data"
          placeholder="Age"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />
        <TextField
          id="standard-full-width"
          label="Expected experience and/or skills"
          placeholder="Skills"
          helperText="Knowledge for using the App"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />
      </div>
      <div>
      <TextField
          id="standard-full-width"
          label="Anticipated tasks"
          placeholder="Placeholder"
          helperText="Any interaction with Theraphy Builder e.g. turn on the app, behaviour etc."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />

        <Button>Submit</Button>
      </div>
    </div>
      </TabPanel>
    </div>
  );
}