import './App.css';
import { GlobalProvider } from './hooks/GlobalContext';
import Inicial from './pages/Inicial'


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Inicial />
      </GlobalProvider>
    </div>
  );
}

export default App;
