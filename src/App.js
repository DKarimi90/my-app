

import Navbar from './component/Navbar';
import Home from './Home';
import CreateBlog from './component/CreateBlog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import News from './component/News';


function App() {


  

 
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
      <Switch>
        <Route exact path = "/">
          <Home /> 
        </Route>
        <Route path = "/create">
          <CreateBlog /> 
        </Route>
      
      </Switch>
      </div>
     </div>
    </Router>
  );
}

export default App;