//Modules
import type { NextPage } from "next";
//Components
import Header from "../components/common/Header";
import HomeComponent from "./HomeComponent"
const Home: NextPage = () => {
  return <>
  <Header ></Header>
  <HomeComponent></HomeComponent>
  </>;
};

export default Home;
