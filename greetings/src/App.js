import './App.css';
import Greetings from './greetings';
import Demo from './counter';
import Users from './effect'

function App() {
  return (
  
    <div className="App">
      <Greetings randomMax={8}/>
      <Demo/>
      <Users/>
      {/* <Demo /> */}
    </div>
  );
}

export default App;
