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
import { AppBar } from '@material-ui/core';


export default function Navigation() {
    return (
      <div>
  <Router>
        <div >
          <nav position="sticky" color="default">
            <ul>
              <li>
                <Link to="/">Introduction</Link>
              </li>
              <li>
                <Link to="/eligibilityCriteria">Eligibility Criteria</Link>
              </li>
              <li>
                <Link to="/foreseeableHazards">Foreseeable Hazards</Link>
              </li>
              <li>
                <Link to="/knowHazard">Know Hazard</Link>
              </li>
              <li>
                <Link to="/personaBuilder">Persona Builder</Link>
              </li>
              <li>
                <Link to="/questionaries">Questionaries</Link>
              </li>
              <li>
                <Link to="/systemUsabilityScale">System Usability Scale</Link>
              </li>
              <li>
                <Link to="/testIntroduction">Test Introduction</Link>
              </li>
              <li>
                <Link to="/uiSaftyAndPotentialError">uiSaftyAndPotentialError</Link>
              </li>
              <li>
                <Link to="/uiSpecifications">UI Specifications</Link>
              </li>
              <li>
                <Link to="/useScenario">Use Scenario</Link>
              </li>
              <li>
                <Link to="/userEnvironment">User Environment</Link>
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