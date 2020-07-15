import React from 'react';
import {useState} from 'react';
import { Container, Button, Navbar, NavItem, NavbarToggler,NavbarBrand, Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem  } from 'reactstrap';
import Page from './Page';


function App() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

  return (
    <Container maxWidth="sm">
   <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Usability Engineering</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <p>Introduction</p>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Eligibility Criteria
               <DropdownItem divider />
                </DropdownItem>
                <DropdownItem>
                  Persona Builder
                </DropdownItem>
                <DropdownItem>
                  User Environment
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Risk Analysis
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  UI Safty and Potential Error
              <DropdownItem divider />
                </DropdownItem>
                <DropdownItem>
                 Known Hazard
                </DropdownItem>
                <DropdownItem>
                 Foreseeable Hazards
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Build Simulation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Use Scenario
              <DropdownItem divider />
                </DropdownItem>
                <DropdownItem>
                 UI Specifications
                </DropdownItem>
                <DropdownItem>
                 Selection of Use Scenario
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
            <DropdownToggle nav caret>
                Usability Test
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Test Introduction
              <DropdownItem divider />
                </DropdownItem>
                <DropdownItem>
                 Questionaries
                </DropdownItem>
                <DropdownItem>
                 System Usability Scale
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
             
            <NavItem>
            <p>Thank You</p>
            </NavItem>  
          </Nav>    
      </Navbar>

      <Container>
        <Page className="themed-container"></Page>
      </Container>

   <Button variant="contained">Next</Button>
    </Container>
  );
}

export default App;
