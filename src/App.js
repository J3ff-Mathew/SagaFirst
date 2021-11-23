import logo from './logo.svg';
import './App.css';
import Detail from './component/Detail';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Nav1 from './component/Nav1';
import Counter from './component/Counter';
import { Container, Navbar, Nav } from 'react-bootstrap'
import UserDetails from './component/UserDetails';
import CountryDetails from './component/CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav1 />
        <Switch>
          <Route path='/' exact component={Detail} />
          <Route path='/counter' component={Counter} />
          <Route path='/details' exact component={UserDetails} />
          <Route path='/countrydetails' component={CountryDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
