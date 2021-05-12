import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CssBaseline } from "@material-ui/core"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




function Addshifts() {
 
      const classes = useStyles();
  return (
   <div>
     <CssBaseline />      
     <Header />

     <div className={classes.root} style={{marginBottom:'100px'}} >
       <Container  >    
      <Grid container spacing={2}>
         <Grid item xs={12}>
          <h2 className={classes.paper,'marginTopHome1'}>Add a shift</h2>
        </Grid>
        
        <Grid item xs={12}>
          <h2 className="marginTopHome2">Location</h2>
        </Grid>
        <Grid item xs={12}>
          <p className="marginTopHome2">Choose a location where you want to add the shift</p>
        </Grid>
        <Box borderBottom={2} style={ {width: '100vw', borderColor: 'gray', margin:'10px' }} />

        <Grid item xs={6}>
          <h3 className="marginTopHome2">Amager</h3>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
              <FormControlLabel
          control={<Checkbox color="primary" />}
        />
          </FormControl>
        </Grid>
        <Box borderBottom={1} style={ {width: '100vw', borderColor: 'gray', margin:'10px' }} />
        <Grid item xs={6}>
          <h3 className="marginTopHome2">Østerbro</h3>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
              <FormControlLabel
          control={<Checkbox color="primary" />}
        />
          </FormControl>
        </Grid>
        <Box borderBottom={1} style={ {width: '100vw', borderColor: 'gray', margin:'10px'  }} />
        <Grid item xs={6}>
          <h3 className="marginTopHome2">Valby</h3>
        </Grid>
       <Grid item xs={6}>
          <FormControl component="fieldset">
              <FormControlLabel
          control={<Checkbox color="primary" />}
        />
          </FormControl>
        </Grid>
        <Box borderBottom={1} style={ {width: '100vw', borderColor: 'gray', margin:'10px'  }} />
         <Grid item xs={6}>
          <h3 className="marginTopHome2">Frederiksberg </h3>
        </Grid> 
        <Grid item xs={6}>
         <FormControl component="fieldset">
              <FormControlLabel
          control={<Checkbox color="primary" />}
        />
          </FormControl>
        </Grid>
         <Grid item xs={6}>
          <h3 className="marginTopHome2">All locations </h3>
        </Grid> 
        <Grid item xs={6}>
          <FormControl component="fieldset">
              <FormControlLabel
          control={<Checkbox color="primary" />}
        />
          </FormControl>
        </Grid>
      
       <Grid item xs={6} style={{marginTop:'20px'}}>
          <Link to="/home">

          <Button  variant="contained" style={{
        backgroundColor: "#E5E5E5",
        color:"black",
        borderRadius:'28px',
      }}>
        Back
      </Button>
      </Link>
        </Grid>
        <Grid item xs={6} style={{marginTop:'20px'}}>
          <Link to="/Calendar">

          <Button variant="contained" style={{
        backgroundColor: "#03DAC5",
        color:"white",
        borderRadius:'28px',
      }}>
        Next
      </Button>
      </Link>
        </Grid>
     
      </Grid>
      
      </Container>
   
     
   
  
   
   </div>
   <div style={{marginTop:'150px'}}>
   <Footer />
  </div>
   </div>
  );
}
export default Addshifts;