import { Switch, Route } from "react-router-dom";
import CreateEvent from "./components/events/CreateEvent";
import Event from "./components/events/Event";
import EventList from "./components/events/EventList";
import LandingPage from './components/landingPage/LandingPage';
import Navbar from "./components/landingPage/Navbar";

function App() {
  return (
    <div className="App">
       <Navbar />
       
       <Switch>

         <Route path='/' component ={LandingPage} exact />   
          <Route path='/events' component ={EventList} exact />  
          <Route path='/event/:id' component ={Event}  exact/>  
          <Route path='/events/add' component ={CreateEvent}  exact/>  
       </Switch>

    </div>
  );
}

export default App;
