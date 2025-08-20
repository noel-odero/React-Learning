import './App.css';
import Callback from './hooks/UseCallbacks';
import Demo from './hooks/UseMemo';

function App() {
  return (
    <div className="App">
      <Demo/>
      <Callback/>
    </div>
  );
}

export default App;
