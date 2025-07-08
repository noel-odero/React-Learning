import './App.css';
import Greetings from './greetings';
import Counter from './count';
import Users from './effect'
import Focus from './focus';
import Demo from './counter';

function App() {
  return (
  
    <div className="App">
      <Greetings randomMax={8}/>
      <Demo />
      <Counter/>
      <Focus/>
      <Users/>
    </div>
  );
}

export default App;
