import React from 'react';
import {useState} from 'react';
import { Row, Col,Container, Button, Navbar, NavItem, NavbarToggler,NavbarBrand, Nav } from 'reactstrap';



function App() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

  return (
    <Container maxWidth="sm">
   <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <p>Option 1</p>
            </NavItem>
            <NavItem>
            <p>Option 2</p>

            </NavItem>
            <NavItem>
            <p>Option 3</p>

            </NavItem>
            
          </Nav>
     
        
      </Navbar>
   <Button variant="contained">Next</Button>
    </Container>
  );
}

export default App;
