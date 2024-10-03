import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Header from './Header/Header';
import Hello2 from './Hello2/Hello2';
import Car from './Car/Car';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Hello />
      <Header />
      <Hello2 />
      <br/>
      <Car />
      <br/>
      <Login />
    </div>
  );
}

export default App;
