import logo from './logo.svg';
import './App.scss';
import Card from "./component/Card";
import ShoppingCar from "./component/ShoppingCar";
function App() {
  return (
    <div className="App">
      <div className='home-container'>
        <div className='title'>
          漁夫の運動服飾專賣店
        </div>
        <div className='main'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <ShoppingCar/>
        </div>


      </div>

    </div>
  );
}

export default App;
