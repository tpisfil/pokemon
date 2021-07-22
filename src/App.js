import axios from 'axios';
import './App.css';
import ApiCall from './components/ApiCall';

function App() {
  return (
    <div className="App">
      <h1>- Axios Pokemon API -</h1>
      <ApiCall/>
    </div>
  );
}

export default App;
