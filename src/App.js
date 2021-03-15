import logo from './logo.svg';
// import './App.css';
import SelectItem from './Components/SelectItem';
import Recommended from './Components/Recommended/Recommended';
import AdvertisingArea from './Components/AdvertisingArea/AdvertisingArea';
import MultiComponents from './Components/MultiComponents/MultiComponents';
import FindCategory from './Components/FindCategory/FindCategory';
import ForYourHome from './Components/ForYourHome/ForYourHome';

function App() {
  return (
    <div className="App">
      <SelectItem /> <br/>
      <FindCategory /> <br/> <br/>
      <Recommended /> <br/> <br/>
      <ForYourHome /> <br/> <br/>
      <Recommended /> <br/> <br/>
      <AdvertisingArea /> <br/> <br/>
      <Recommended /> <br/> <br/>
      <Recommended /> <br/> <br/>
      <MultiComponents />
    </div>
  );
}

export default App;
