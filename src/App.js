import logo from './logo.svg';
// import './App.css';
import SelectItem from './Components/SelectItem';
import Recommended from './Components/Recommended/Recommended';
import AdvertisingArea from './Components/AdvertisingArea/AdvertisingArea';
import MultiComponents from './Components/MultiComponents/MultiComponents';
import FindCategory from './Components/FindCategory/FindCategory';

function App() {
  return (
    <div className="App">
      <SelectItem /> <br/>
      <FindCategory /> <br/>
      <Recommended /> <br/>
      <Recommended /> <br/>
      <AdvertisingArea /> <br/>
      <Recommended /> <br/>
      <Recommended /> <br/>
      <MultiComponents />
    </div>
  );
}

export default App;
