import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Humaans from './../FlatAssets/Humaaans/humaaans.png';




const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
    overflow: 'inherit',
    mx: "auto",
    float: 'left',
    },
  media: {
    paddingTop: '56.25%',
  },
  cardStyle: {
    float: 'left',
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%'
  },
  buttonStyle: {
    margin: '0 auto',
    backgroundColor: '#007348d4',
    color: 'white'
  },
});

export default function Introduction() {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root, classes.cardStyle}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Welcome! <br></br>This is an Introduction to  Usability Engineering
          </Typography>
          <img src={Humaans}></img>
        </CardContent>
      </CardActionArea>
    </Card>

<Card
className={classes.root, classes.cardStyle}>
    <CardContent>
      
      <Typography variant="body2" component="p">
This Webform process contains all data specifying the safe and effective use of the following product:
<ul>
  <li>Product type: Medical Applicaiton for the treatment of Mental Illness patients.</li>
  <li>Product name: Theraphy Builder</li>
</ul>
</Typography>
</CardContent>
</Card>

<Card 
className={classes.root, classes.cardStyle}>
    <CardContent>
      <Typography variant="body2" component="p">
      The information contained in this document provides regulatory bodies with evidence of actions undertaken to ensure the usability related to the safe use of the product.
Core data in this usability engineering file are:
<ul>
  <li>User group profiles.</li>
  <li>Use environment.</li>
  <li>Use scenarios and identified hazard-related use scenarios.</li>
  <li>Use scenarios and identified hazard-related use scenarios.</li>
  <li>User interface specification .</li>
</ul>
      </Typography>
      </CardContent>
</Card>

<Card 
className={classes.root, classes.cardStyle}>
    <CardContent>
      <Typography variant="body2" component="p">
      The risk analysis for the product has shown that none of the identified 
use errors lead to intolerable harm for the patient, user or other humans 
in the environment where the product is used. All known and foreseeable use 
errors of the product have been mitigated on the user interface and/or as 
part of training and instructions for use respectively.
      </Typography>
      
      </CardContent>
</Card>



<Card className={classes.cardStyle}
>
   
<CardActions style={{width: '100%'}}>
<Button className={classes.buttonStyle}>Learn More</Button>
<Button href="/EligibilityCriteria" className={classes.buttonStyle}>Next</Button>
</CardActions>
</Card>
</>
  );
}
