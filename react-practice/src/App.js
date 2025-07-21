import './App.css';
import Button from './button';

function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("Button 1 was clicked!")}>Button 1</Button>
      <Button onClick={() => alert("Button 2 was clicked!")}>Button 2</Button>
      <Button onClick={() => alert("Button 3 was clicked!")}>Button 3</Button>
    </div>
  );
}

export default App;
