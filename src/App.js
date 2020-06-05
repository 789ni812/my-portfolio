import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// Material-ui
import Grid from '@material-ui/core/Grid';


import './App.scss';

import Footer from './components/Footer';
//import ChartExample from './mockup/chartExample'; // show off some information in chart. Dont know what though?
import CareerHistory from './mockup/careerHistory';
//import UserDetailsTest from './mockup/test_usersDetails'; // navigator useragent information
import ContentIntroduction from './mockup/ContentIntroduction';


function Home() {
  return <ContentIntroduction />;
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

function CHistory() {
  return <CareerHistory />
}

const App = () => {

  return (
    <div>

      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/careerHistory">Career history</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/careerHistory">
                  <CHistory />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>















        </Grid>
        <Grid item xs={12} sm={2}>

        </Grid>
        <Grid item xs={12} sm={10}><Footer /></Grid>
      </Grid>






    </div>
  );
}


export default App;