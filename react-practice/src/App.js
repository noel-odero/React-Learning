import './App.css';
import Button from './button';
import MappedList from './maps';
import Greetings from './greet';

function App() {
  return (
    <div className="App">
      <Button/>
      <MappedList/>
      <Greetings className='greet'/>
    </div>
  );
}

export default App;
