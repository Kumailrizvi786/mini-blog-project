import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';

function App() {


  return (
   <Router>
      <div className="App">
        <Navbar /> 
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route  path='/Create'> 
              <Create />
            </Route> 
            <Route  path='/BlogDetail/:id'>
              <BlogDetail />
            </Route>
          </Switch>     
        </div>
      </div>
      </Router>
  );
}

export default App;
