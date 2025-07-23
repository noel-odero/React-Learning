import './App.css';
import Button from './button';
import MappedList from './maps';
import Greetings from './greet';
import Counter from './counter';

function App() {
  return (
    <div className="App">
      <Button/>
      <MappedList/>
      <Greetings className='greet'/>
      <Counter className="count"/>
    </div>
  );
}

export default App;
