import logo from './logo.svg';
import SelectItem from './Components/SelectItem/SelectItem';
import Recommended from './Components/Recommended/Recommended';
import AdvertisingArea from './Components/AdvertisingArea/AdvertisingArea';
import MultiComponents from './Components/MultiComponents/MultiComponents';
import FindCategory from './Components/FindCategory/FindCategory';
import ForYourHome from './Components/ForYourHome/ForYourHome';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      {/* <SelectItem /> <br/> */}
      <SelectItem />
      <FindCategory /> <br/> <br/>
      <Recommended /> <br/> <br/>
      <ForYourHome /> <br/> <br/>
      <AdvertisingArea /> <br/> <br/>
      <Recommended /> <br/> <br/>
      <Recommended /> <br/> <br/>
      <MultiComponents />
    </div>
  );
}

export default App;
