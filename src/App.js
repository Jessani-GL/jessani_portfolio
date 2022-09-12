import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-container">
      
    
        <Header/>
       
      </header>
    </div>
  );
}

export default App;
