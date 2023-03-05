import image from './image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo"/>
        <p>
          Currently solving problems, come back soon!
        </p>
      </header>
    </div>
  );
}

export default App;
