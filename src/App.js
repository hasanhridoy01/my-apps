import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="app background-body">
      <Header></Header>
      <Banner></Banner>
      <Service></Service>
      <Login></Login>
    </div>
  );
}

export default App;
