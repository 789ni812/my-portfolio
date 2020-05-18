import React from "react";


import './App.scss';
import Grid from '@material-ui/core/Grid';



import Header from './mockup/Header'
import Footer from './components/Footer';
//import ChartExample from './mockup/chartExample'; // show off some information in chart. Dont know what though?
// import CareerHistory from './mockup/careerHistory';
import UserDetailsTest from './mockup/test_usersDetails'; // navigator useragent information





const App = () => {

  return (
    <div>

      <Grid container spacing={3}>
        <Grid item xs={12}><Header /></Grid>
        <Grid item xs={12} >
          MAIN AREA
          
          
         
         
         
          
        </Grid>
<Grid item xs={12} sm={2}>
<UserDetailsTest />
</Grid>
        <Grid item xs={12} sm={10}><Footer /></Grid>
      </Grid>






    </div >
  );
}


export default App;