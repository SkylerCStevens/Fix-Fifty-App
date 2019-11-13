import React from "react";
import logo from '../../assets/images/logo.png';
import './index.css';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';


function Schedule() {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-11-15T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);

        console.log(date)
    };

    return (
        <div className="schedule-container">
            <img src={logo} alt="logo" className="logo" />

            <h1 className="title">Schedule Meeting</h1>

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
                type="submit"
                color="primary"
            >Schedule</Button>

        </div>
    )

}




export default Schedule;