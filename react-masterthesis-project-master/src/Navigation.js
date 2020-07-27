import React from 'react';
import Introduction from './Pages/Introduction';
import EligibilityCriteria from './Pages/EligibilityCriteria';
import ForeseeableHazards from './Pages/ForeseeableHazards';
import KnowHazard from './Pages/KnowHazard';
import PersonaBuilder from './Pages/PersonaBuilder';
import Questionaries from './Pages/Questionaries';
import SystemUsabilityScale from './Pages/SystemUsabilityScale';
import TestIntroduction from './Pages/TestIntroduction';
import UiSaftyAndPotentialError from './Pages/UiSaftyAndPotentialError';
import UiSpecifications from './Pages/UiSpecifications';
import UseScenario from './Pages/UseScenario';
import SelectionOfUseScenario from './Pages/SelectionOfUseScenario';
import UserEnvironment from './Pages/UserEnvironment';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import assets from './Pages/assets/fzi_logo.jpg';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
  },
  link:{
    textDecoration: 'none',
    color: 'black',
    fontSize: '18px',
    fontWeight: '500',
    padding: '5px',
    "&:hover": {
      textDecoration: 'none',
      color: 'black',
    }},
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div>
             <img style={{height:'3vw', borderRadius: '5px'}} src={assets} alt="fzi logo" />
          </div>
          <Typography style={{paddingLeft: '25px'}} variant="h6" noWrap>
            Usability Engineering for Theraphy Builder Application
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Router>
      <Drawer
        style={{zIndex: '+1'}}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
    
     
        <ListItem button onClick={handleClose}>
          <NavigateNextIcon />
        <Link className={classes.link} to="/introduction">Introduction</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/eligibilityCriteria">Eligibility Criteria</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/personaBuilder">Persona Builder</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/userEnvironment">User Environment</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/uiSaftyAndPotentialError">UI Safty and Potential Error</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/KnowHazard">Know Hazard</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/foreseeableHazards">Foreseeable Hazards</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/useScenario">Use Scenario</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/uiSpecifications">UI Specifications</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/testIntroduction">Test Introduction</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/SelectionOfUseScenario">Selection of Use Scenario</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/questionaries">Questionaries</Link>
        </ListItem>
        <ListItem button onClick={handleClose}>
        <NavigateNextIcon />
        <Link className={classes.link} to="/systemUsabilityScale">System Usability Scale</Link>
        </ListItem>
      </Drawer>

      <Switch>
        <Route path="/introduction">
          <Introduction />
        </Route>
        <Route path="/eligibilityCriteria">
          <EligibilityCriteria />
        </Route>
        <Route path="/foreseeableHazards">
          <ForeseeableHazards />
        </Route>
        <Route path="/knowHazard">
          <KnowHazard />
        </Route>
        <Route path="/personaBuilder">
          <PersonaBuilder />
        </Route>
        <Route path="/questionaries">
          <Questionaries />
        </Route>
        <Route path="/systemUsabilityScale">
          <SystemUsabilityScale />
        </Route>
        <Route path="/testIntroduction">
          <TestIntroduction />
        </Route>
        <Route path="/SelectionOfUseScenario">
          <SelectionOfUseScenario />
        </Route>
        <Route path="/uiSaftyAndPotentialError">
          <UiSaftyAndPotentialError />
        </Route>
        <Route path="/uiSpecifications">
          <UiSpecifications />
        </Route>
        <Route path="/useScenario">
          <UseScenario />
        </Route>
        <Route path="/userEnvironment">
          <UserEnvironment />
        </Route>
          </Switch>
          </Router>
    </div>
  );
}