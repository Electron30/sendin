import './App.css';
import Leftbar from './components/leftbar'
import Connections from './components/connections';
import AddConnections from './components/addconnections';
import Transfers from './components/transfers';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Leftbar/>
        <Routes>

        <Route path="/" element={<AddConnections/>} />
        <Route path="connections" element={<Connections/>} />
        </Routes>
        <Transfers/>
    </div>
  );
}

export default App;
