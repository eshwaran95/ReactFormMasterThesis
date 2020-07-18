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
import UserEnvironment from './Pages/UserEnvironment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navigation() {


  const navHeader = {
    backgroundColor: 'white',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 0 25px 0 black'

  }
  const navStyle = {
    listStyleType: 'none',
    margin: '20px',
    padding: '0',
    overflow: 'hidden',
  }

  const navItem = {
    float: 'left',
    padding: '15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '500',
    borderLeft: '1px solid grey',
    
  }
  const navLink = {
    color: 'black',
    textDecoration: 'none'
  }


    return (
    
      <div>
  <Router>
        <div >

      <nav style={navHeader}>
            <ul style={navStyle}>
              <li style={navItem}>
                <Link style={navLink} to="/introduction">Introduction</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink}to="/eligibilityCriteria">Eligibility Criteria</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink}to="/foreseeableHazards">Foreseeable Hazards</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink}to="/KnowHazard">Know Hazard</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink}to="/personaBuilder">Persona Builder</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink}to="/questionaries">Questionaries</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink} to="/systemUsabilityScale">System Usability Scale</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink} to="/testIntroduction">Test Introduction</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink} to="/uiSaftyAndPotentialError">UI Safty and Potential Error</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink} to="/uiSpecifications">UI Specifications</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink} to="/useScenario">Use Scenario</Link>
              </li>
              <li style={navItem}>
                <Link style={navLink} to="/userEnvironment">User Environment</Link>
              </li>
            </ul>
          </nav>
         
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
        </div>
      </Router>

    </div>
    );
  }

  /*
      <AppBar position="static">
  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>
*/