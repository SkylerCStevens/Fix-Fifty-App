import React from "react";
import logo from '../../assets/images/logo.png';
import './index.css';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Nav from '../Nav'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

function Schedule() {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-11-15T09:00:00'));
    const [open, setOpen] = React.useState(false);

    const handleDateChange = date => {
        setSelectedDate(date);

        console.log(date)
    };

    const handleOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleRedirect = () => {
        handleClose()
        window.location = '/';

    }




    const classes = useStyles();
    return (
        <div className="schedule-container">

            <img src={logo} alt="logo" className="logo-1" />

            <h1 className="title">SCHEDULE</h1>
            <Nav />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <div>
                        <KeyboardDatePicker
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Choose a date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </div>
                    <div>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Choose a time"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </div>
                </Grid>
            </MuiPickersUtilsProvider>
            <Button
                color="primary"
                onClick={handleOpen}
            >Schedule</Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title">Your appointment has been scheduled!</h2>
                    <Button color="primary" onClick={handleRedirect}>Go back</Button>
                </div>
            </Modal>

        </div>
    )

}




export default Schedule;