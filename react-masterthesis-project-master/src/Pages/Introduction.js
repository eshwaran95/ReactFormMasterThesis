//import react for component functionality
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import assets from './assets/fzi.jpg';




const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
  },
  media: {
    paddingTop: '56.25%',
  },
});

export default function Introduction() {
  const classes = useStyles();

  return (
    <Card
    className={classes.root}>
      <CardActionArea>
        <CardMedia 
      className={classes.media}
      title="FZI logo"
      image= {assets}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Introduction to  Usability Engineering
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
This Webform process contains all data specifying the safe and effective use of the following product:
•	Product type: Medical Applicaiton for the treatment of Mental Illness patients.
•	Product name: Theraphy Builder
The information contained in this document provides regulatory bodies with evidence of actions undertaken to ensure the usability related to the safe use of the product.
Core data in this usability engineering file are:
•	User group profiles .
•	Use environment.
•	Use scenarios and identified hazard-related use scenarios.
•	User interface specification .
The risk analysis for the product has shown that none of the identified use errors lead to intolerable harm for the patient, user or other humans in the environment where the product is used. All known and foreseeable use errors of the product have been mitigated on the user interface and/or as part of training and instructions for use respectively.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/EligibilityCriteria">
     <button type="button">
          Next
     </button>
 </Link>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
