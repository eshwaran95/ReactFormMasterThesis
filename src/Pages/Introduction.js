//import react for component functionality
import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron} from 'reactstrap';

//Name of the Component
function Introduction() {
     //javascript functionality for example buttons go here(outside of return, but inside of function)

return(
//All reactstrap components and HTML elements inside the one div
<div>
<Jumbotron>
    <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
    </Jumbotron>
    
</div>
);
}

//export function, to use it in App.js 
export default Introduction;