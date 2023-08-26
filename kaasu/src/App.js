import logo from './logo.svg';
import './App.css';

function handleNameChange() {
  const names = ["Earn", "Grow", "Give"];
  const int = Math.floor(Math.random()*3);
  return names[int]
}

function App() {
  return (
    <div>
      Subscribe to Kaasu
      <p>Let's {handleNameChange()} Money</p>
    </div>
  );
}

export default App;
