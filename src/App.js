import { Switch, Route } from "react-router-dom";
import CreateEvent from "./components/events/CreateEvent";
import Event from "./components/events/Event";
import EventList from "./components/events/EventList";

function App() {
  return (
    <div className="App">
       
       <Switch>
          
          <Route path='/events' component ={EventList} exact />  
          <Route path='/event/:id' component ={Event}  exact/>  
          <Route path='/events/add' component ={CreateEvent}  exact/>  
       </Switch>

    </div>
  );
}

export default App;
