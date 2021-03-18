import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutMeScreen from './screens/AboutMeScreen';

const App = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <AboutMeScreen />
    </>
  );
};

export default App;
