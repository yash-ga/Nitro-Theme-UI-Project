// import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Features } from './components/Features';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Features/>
      <Team/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
