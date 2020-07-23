import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TestIntroduction() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Test Title:
        </Typography>
        <Typography variant="h5" component="h2">
        Usability Testing for Therapy builder based Conversational UI
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Introduction :
        </Typography>
        <Typography variant="body2" component="p">
        Welcome participant warmly and show her a place in which you’re going to conduct the test. For the introduction part, seat her in a way that will let you see her face (helps with natural conversation). The Computer screen should show a neutral website (Localhost Intro Page.). Don’t show the research software yet.

Hello (Name of the participant), thank you for coming. My name is (your name) and I’m a researcher for (name of the product)                    at FZI-ESS – I’m going to walk you through the session today.

Before we’ll start I have some information for you.
We’re currently testing (name of the product-Theraphy Builder) to learn as much as we can about the way people use it. Every product is intended to work in a certain way by its creators, but as you know – the reality might be quite different. The goal of this research is to get us as close to the reality as possible. 

The session will take about an hour.

I don’t recommend running tests that take longer than 1 hours (unless your particular test case requires it). Many participants will get tired pretty quickly during the test, as a result of acting under stress, which might bias your results
Also there are three scenarios considered in this project So we make this session in one platform with three different stages of Product development –

•	Server-
o	 Downtime(communication required when something is in process-ATL tags,404 not found),
o	Speed(Search engine Optimization)
•	Visual Factors-
o	Font Size and color (Example- Elderly people need Font size to be large)
o	Branding 
o	Layout color
o	Navigation
o	Content
o	Headings
o	Paragraphs

•	User Experience Elements
o	Dialog Flow
o	Useful Contents
o	Desirable Contents
o	Accessibility
o	Credibility

Please remember, during the next hour, that we’re testing Theraphy Builder not you. Don’t worry at all about mistakes. If they happen, it’s the fault of the product. Finding about it is absolutely fantastic and gets us closer to creating a great product.

During the whole test, please try to think out loud. Share anything that’s in your head. Tell me what you are looking at on the screen, what your thoughts are, what you like and what don’t you like, et cetera. We want to learn about your honest reactions to (name of the product). 

Do you have any questions so far?


Explaining the “think out loud” protocol is extremely important to the whole study. Make sure that the participant understands what you are asking for

If you have any doubts during the test, feel free to ask me any questions. However, please remember that I might not be able to answer them during the test. We want to learn about your experience with (name of the product), so I can’t guide you. I’ll be glad to answer all your questions after the test.

With your permission, we’re going to record the session. We’ll record your voice, face and actions on the screen – that will give us the full picture of the session for further analysis. We’re not going to share these recordings outside of the team directly working on (name of the product).

If you don’t mind, I’d like to ask you to sign this permission form. It simply states that you give us the permission to record the session and that we’re going to secure this data and make it available only to the team working on (name of the product).

Hand the permission form and a pen to the participant. While the participant signs the form, set up the recording software. 

Refusal to sign a form, says the video recording is not done but still the usability test scripts can be followed.

Inform participants if your team is observing the session. If you have any other forms that need to be signed (e.g. NDA) – handle them after the permission form. For each form that must be signed, clearly explain why.

Also, I hope you don’t mind, but I’m going to take notes. It helps me with analyzing the session/Create the Self validation scripts.

After the scary, formal, part – you need to relax the participant. Ask questions that are easy to answer and somehow connected to the research.

 

Have you used any similar products?

How much time, roughly, would you say that you spend on the Internet? What do you usually do?


Thank you, the context you provided was very helpful. 

If you feel ready, let’s begin with the test.

Sit slightly below and to the right of participant so she won’t be able to see your face during the test and read your emotions. Turn on the recording software.

We have (insert number) of tasks that I’d like you to go through today. I’m going to read to you the first task. If you have any questions about it – please ask them right away.

Read slowly the first scenario and task. Make sure that the participant understands it. Hand her the printed version in case she needs a reminder of the details of the task later on.

Start whenever you feel ready and once again – please share your thoughts with me out loud.

Repeat the procedure with all the tasks and scenarios. Continue with each task until the user succeeds, or shows signs of frustration or difficulty. 


Thank you, that was a very helpful session. Your feedback is extremely valuable to us.

Before we wrap up, could you please take a look at this quick questionnaire as well?

Hand the user the post-test questionnaire (if you planned one), which might include questions about demographics.

When the user has completed all the questions, provide the promised compensation, stop the screen recorder, thank her and escort her out.
Try to repeat the procedure in the exact same way with each participant. That will reduce the likelihood of bias in the research.

          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Link to="/UiSPecification">
    <button type="button">
         Back
    </button>
</Link>
<Link to="/SelectionOfUseScenario">
     <button type="button">
          Next
     </button>
 </Link>
      </CardActions>
    </Card>
  );
}