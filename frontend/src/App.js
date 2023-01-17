import TableState from './ContextApi/AllStates';
import Create_details from './component/Create_details';
import View_details from './component/View_details';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Edit from './component/Edit';
function App() {
  return (
  <TableState>
    <Router>
        <Navbar />
        <Switch>
        <Route  component={Edit} path='/edit/:id' />
        {/* <Route component={Edit} path="/edit"/> */}
        <Route component={View_details} path="/view-details" />
        <Route component={Create_details} path="/add-details" />
        
          </Switch>
      </Router>
</TableState>




  

    
  )
}

export default App;
