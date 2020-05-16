import React from "react";


// import './App.scss';
import Grid from '@material-ui/core/Grid';



import Header from './mockup/Header'
import Footer from './components/Footer';
//import ChartExample from './mockup/chartExample';
import CareerHistory from './mockup/careerHistory';





const App = () => {

  return (
    <div>

      <Grid container spacing={3}>
        <Grid item xs={12}><Header /></Grid>
        <Grid item xs={12}>
        MAIN AREA
          <CareerHistory />
        </Grid>

        <Grid item xs={12}><Footer /></Grid>
      </Grid>






    </div >
  );
}


export default App;