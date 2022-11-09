import React from "react";
import config from "../config.json"
import Favorites from "../src/components/Favorites"
import Menu from "../src/components/Menu"
import Timeline from "../src/components/Timeline"
import Banner from "../src/components/Banner"
import Header  from "../src/components/Header"

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };
  // const valorDoFiltro = "Frost";
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <div style={estilosDaHomePage} >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Banner />
        <Header />
        <Timeline seachValue={valorDoFiltro} playlists={config.playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>

  );
}

export default HomePage;