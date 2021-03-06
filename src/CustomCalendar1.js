import React, { useState, useEffect, useReducer } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Paper, Grid } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import CloudIcon from "@material-ui/icons/Cloud";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import {
  fetchShifts,
  updateShiftToAdd,
  setShiftDetails,
} from "./actions/shiftActions";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
      backgroundColor: "#009BCC",
        opacity: "80%",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: "white",
        color: "#1b5e20",
      },
    },
  },
});

export const styles = makeStyles((theme) => ({
  notInThisMonthDayPaper: {
    width: "35px",
    height: "35px",
    backgroundColor: "#eeeeee",
    margin: "3px",
    boxShadow: "none",
    borderRadius: "50%",
    padding: "1px",
  },
  normalDayPaper: {
    width: "35px",
    height: "35px",
    backgroundColor: "#e8f5e9",
    margin: "3px",
    boxShadow: "none",
    borderRadius: "50%",
    padding: "1px",
    cursor: "pointer",
  },
  selectedDayPaper: {
    width: "35px",
    height: "35px",
    backgroundColor: "lightGreen",
    margin: "3px",

    boxShadow: "none",
    borderRadius: "50%",
    padding: "1px",
    cursor: "pointer",
    color: " white",
  },

  todayPaper: {
    width: "35px",
    height: "35px",
    margin: "3px",
    boxShadow: "none",
    backgroundColor: "#f9fbe7",
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "lime",
    padding: "1px",
    cursor: "pointer",
  },
  shiftDay: {
    width: "35px",
    height: "35px",
    backgroundColor: "lightBlue",
    margin: "3px",
    boxShadow: "none",
    borderRadius: "50%",
    padding: "1px",
    cursor: "pointer",
    textAlign: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function CustomCalendar({
  shiftData,
  fetchShifts,
  updateShiftToAdd,
  setShiftDetails,
}) {
  useEffect(() => {
    fetchShifts();
  }, []);
  // console.log(shiftData.shifts[0].date.substring(6, 7));
  const [selectedDate, handleDateChange] = useState(new Date());
  const [open, setOpen] = React.useState(false);

  const classes = styles();
  const today = new Date();
  const sunnyDays = [];
  const cloudyDays = [];
  const snowyDays = [];
  // const shiftDays = [];
  let shiftDays = [];
  // if (shiftData.shifts.length > 0) {
  shiftDays = shiftData.shifts.map((shift) => {
    return parseInt(shift.day.substring(8, 10));
    // return shift.day.toISOString();
  });
  // }
  let newShift;
  function storeShift(event) {
    handleDateChange(event);

    newShift = {
      day: event,
      shiftTime: shiftData.shiftTime,
      shiftLocation: shiftData.shiftLocation,
    };
    updateShiftToAdd(newShift);
    shiftData.shifts.forEach((element) => {
      if (
        element.day.substring(8, 10) === event.toISOString().substring(8, 10)
      ) {
        setShiftDetails(event);

        updateShiftToAdd(element);
        console.log(element, shiftData.shiftToAdd);
        handleOpen();
      }
    });
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getDay(myday) {
    console.log(myday);
  }
  function getDayElement(
    day,
    selectedDate,
    isInCurrentMonth,
    dayComponent,
    newShift
  ) {
    const isSunny = sunnyDays.includes(day.getDate());
    const isCloudy = cloudyDays.includes(day.getDate());
    const isSnow = snowyDays.includes(day.getDate());
    const isShift = shiftDays.includes(day.getDate());

    const isSelected = day.getDate() === selectedDate.getDate();
    const isToday =
      day.getDate() === today.getDate() && day.getMonth() === today.getMonth();
    let dateTile;
    if (isInCurrentMonth) {
      if (isSunny) {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                  ? classes.todayPaper
                  : classes.normalDayPaper
            }
          >
            <Grid item>
              <WbSunnyIcon style={{ color: "orange", width: "15px" }} />
            </Grid>
            <Grid item>{day.getDate()}</Grid>
          </Paper>
        );
      } else if (isCloudy) {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                  ? classes.todayPaper
                  : classes.normalDayPaper
            }
          >
            <Grid item>
              <CloudIcon style={{ color: "gray", width: "15px" }} />
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      } else if (isSnow) {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                  ? classes.todayPaper
                  : classes.normalDayPaper
            }
          >
            <Grid item>
              <AcUnitIcon
                style={{ color: "#3d5afe", width: "15px", marginTop: "-2px" }}
              />
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      } else if (isCloudy) {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                  ? classes.todayPaper
                  : classes.normalDayPaper
            }
          >
            <Grid item>
              <CloudIcon style={{ color: "gray", width: "15px" }} />
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      } else if (isShift) {
        dateTile = (
          <Paper
            value={selectedDate}
            className={isSelected ? classes.selectedDayPaper : classes.shiftDay}
          >
            {/* <CreateShift></CreateShift> */}
            <Grid item></Grid>
            <Grid className="shifdayitem" item>
              {" "}
              {day.getDate()}
            </Grid>
          </Paper>
        );
      } else if (!isShift) {
        dateTile = (
          <Paper
            value={selectedDate}
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                  ? classes.todayPaper
                  : classes.normalDayPaper
            }
          >
            <Grid item>
              <br />
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      }
    } else {
      dateTile = (
        <Paper className={classes.notInThisMonthDayPaper}>
          <Grid item>
            <br />
          </Grid>
          <Grid item style={{ color: "lightGrey" }}>
            {day.getDate()}
          </Grid>
        </Paper>
      );
    }
    return dateTile;
  }

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        // height: "80vh",
      }}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={materialTheme}>
          <DatePicker
            value={selectedDate}
            onChange={storeShift}
            variant="static"
            renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) =>
              getDayElement(day, selectedDate, isInCurrentMonth, dayComponent)
            }
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>

      {shiftData.shiftDetails && (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paperModal}>
                <h2 id="transition-modal-title">Shift details</h2>
                <p id="transition-modal-description">
                  The following shift has been created and added to the calendar
                </p>
                <Container maxWidth="sm" style={{ marginTop: "-20px" }}>
                  <Grid container spacing={3} className={classes.insideGrid}>
                    <Grid item xs={6}>
                      <h3 style={{ marginLeft: "-5px", textAlign: "left" }}>
                        Company :
                      </h3>
                    </Grid>
                    <Grid item xs={6} style={{ margin: "20px 0px 10px" }}>
                      <p style={{ marginLeft: "-5px", textAlign: "left" }}>
                        Ny Liv Spa
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      <h3
                        style={{
                          marginTop: "-20px",
                          marginLeft: "-5px",
                          textAlign: "left",
                        }}
                      >
                        Location :
                      </h3>
                    </Grid>

                    <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                      <p
                        style={{
                          marginTop: "-20px",
                          marginLeft: "-5px",
                          textAlign: "left",
                        }}
                      >
                        {shiftData.shiftDetails.shiftLocation.toString()}
                      </p>
                    </Grid>

                    <Grid item xs={6}>
                      <h3
                        style={{
                          marginTop: "-20px",
                          marginLeft: "-5px",
                          textAlign: "left",
                        }}
                      >
                        Date:
                      </h3>
                    </Grid>
                    <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                      <p
                        style={{
                          marginTop: "-20px",
                          marginLeft: "-5px",
                          textAlign: "left",
                        }}
                      >
                        {shiftData.shiftDetails.day.toString().substr(0, 10)}
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      <h3
                        style={{
                          marginTop: "-20px",
                          marginLeft: "-5px",
                          textAlign: "left",
                        }}
                      >
                        Time:
                      </h3>
                    </Grid>
                    <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                      <p
                        style={{
                          marginTop: "-20px",
                          marginLeft: "-5px",
                          textAlign: "left",
                        }}
                      >
                        {shiftData.shiftDetails.shiftTime.toString()}
                      </p>
                    </Grid>
                  </Grid>
                </Container>
                <Link to="/Confirmeditshift">
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    style={{
                      backgroundColor: "#03DAC5",
                      color: "white",
                      borderRadius: "28px",
                      width: "120px",
                    }}
                  >
                    Edit Shift
                  </Button>
                </Link>
              </div>
            </Fade>
          </Modal>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shiftData: state.shift,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShifts: () => dispatch(fetchShifts()),
    updateShiftToAdd: (shift) => dispatch(updateShiftToAdd(shift)),
    setShiftDetails: (day) => dispatch(setShiftDetails(day)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCalendar);
