import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { InputContext } from './components/Radar';
import { Bar } from './components/Bar';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact component={Nav} />
          <Route path="/radar" exact component={InputContext} />
          <Route path="/bar" exact component={Bar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
