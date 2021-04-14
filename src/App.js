import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutMeScreen from './screens/AboutMeScreen';
import ExperienceScreen from "./screens/ExperienceScreen";

const App = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <AboutMeScreen />
      <ExperienceScreen />
    </>
  );
};

export default App;
