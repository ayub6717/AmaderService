import logo from './logo.svg';
import SelectItem from './Components/SelectItem/SelectItem';
import Recommended from './Components/Recommended/Recommended';
import AdvertisingArea from './Components/AdvertisingArea/AdvertisingArea';
import MultiComponents from './Components/MultiComponents/MultiComponents';
import FindCategory from './Components/FindCategory/FindCategory';
import ForYourHome from './Components/ForYourHome/ForYourHome';
import Slider from './Components/Slider/Slider';
import Service from './Components/Services/Service';
import PersonalCare from './Components/PersonalCare/PersonalCare';
import Trending from './Components/Trending/Trending';

function App() {
  return (
    <div className="App">
      <SelectItem />
      <FindCategory /> <br/> <br/> <br/>
      <Recommended /> <br/> <br/> <br/>
      <ForYourHome /> <br/> <br/>
      <AdvertisingArea /> <br/> <br/>
      <PersonalCare /> <br/> <br/>
      <Trending /> <br/> <br/>
      <MultiComponents />
    </div>
  );
}

export default App;
