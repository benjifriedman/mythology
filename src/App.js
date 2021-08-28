import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage'
import About from './pages/About'
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Navigation from './Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/about" component={About}  />
        <Route path="/mercury" component={Mercury}  />
        <Route path="/venus" component={Venus}  />
        <Route path="/earth" component={Earth}  />
        <Route path="/mars" component={Mars}  />
        <Route path="/jupiter" component={Jupiter}  />
        <Route path="/saturn" component={Saturn}  />
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
