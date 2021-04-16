import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutMeScreen from "./screens/AboutMeScreen";
import EducationScreen from "./screens/EducationScreen";
import ProjectScreen from "./screens/ProjectScreen";

const App = () => {
  return (
    <>
      <Header />
      
        <HomeScreen />
        <AboutMeScreen />
        <EducationScreen />
        <ProjectScreen />
    </>
  );
};

export default App;
