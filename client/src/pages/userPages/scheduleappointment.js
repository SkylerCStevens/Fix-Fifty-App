import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from'@material-ui/core/CardActions';
import CardContent from'@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar'
import { Toolbar, CardMedia } from '@material-ui/core';


const useStyles= makeStyles(theme=>({
    icon:{
        marginRight: theme.spacing(2),
    },
    heroContent:{
        backgroundColor: theme.palette.background.paper,
        padding:theme.spacing(8,0,6),
    },
    heroButtons:{
        marginTop:theme.spacing(4),
    },
    cardGrid:{
        paddingTop:theme.spacing(8),
        paddingBottom:theme.spacing(8),
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    carMedia:{
        paddingTop:'56.25%',
    },
    cardContent:{
        fleGrow:1,
    },
    
}));

const cards = [1, 2, 3];


export default function scheduleappointment() {
    const classes = useStyles();

}

return (
    <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" no wrap>
                    Hello User
        </Typography>


            </Toolbar>




        </AppBar>


        <main>

            {/*Hero*/}

            <div className={classes.heroContent}>
                <Container maxWidth="sm">

                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>

                        Get Started and Schedule An Appointment Today
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Get started by viewing you profile ,scheduling an appointment or by checking out our job listings.
                        More details on how you can get started are down below.

                    </Typography>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">

                    {/*Hero End*/}
                    <Grid container spacing={4}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia}
                                image=""
                                title=""
                            />

                            <CardContent className={classes.cardContent}>
                                <Typography gutterbottom variant="h5" component="h2">
                                    Schedule An Appointment
                                </Typography>
                                <Typography>
                                    You can choose to schdule an appointment based on skills met and your interest.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Go to Appointments
                                 </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Container>

            </div>
        </main>
    </React.Fragment>
)