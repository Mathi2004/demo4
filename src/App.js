import React from 'react';
import './App.css';
import Header from './component/Header';
import BannerSection from './component/BannerSection';
import CategorySection from './component/CategorySection';
import OutdoorPlantSection from './component/OutdoorPlantSection';


function App() {
  return (
    
    <div className="App">
      <Header/>
      <BannerSection/>
      <CategorySection/>
      <OutdoorPlantSection/>
   </div>
  );
}

export default App;
