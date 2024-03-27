import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
// import Items from "./components/Items";
import ItemsRow from "./components/ItemsRow";
import Cta from "./components/Cta";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Grid from "./components/Categories";
function App() {
  return (
    <main className="flex flex-col bg-gray-100 justify-center w-[1200px] mx-auto py-[2rem] px-[4rem] overflow-x-hidden">
      <Nav></Nav>
      <Hero></Hero>
      <Filter></Filter>
      <ItemsRow></ItemsRow>
      <Grid></Grid>
      <Cta></Cta>
      <Links></Links>
      <Footer></Footer>
    </main>
  );
}

export default App;
