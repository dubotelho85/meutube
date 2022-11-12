import React from "react";
import config from "../config.json"
import Favorites from "../src/components/Favorites"
import Menu from "../src/components/Menu"
import Timeline from "../src/components/Timeline"
import Banner from "../src/components/Banner"
import Header  from "../src/components/Header"
import { videoService } from "../src/services/videoService";

function HomePage() {
  const service = videoService();
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };
  // const valorDoFiltro = "Frost";
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [playlists, setPlaylists] = React.useState({});     // config.playlists

    // para nao entrar em loop com a atualização da página
    React.useEffect(() => {
        console.log("useEffect");
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                // Forma imutavel
                const novasPlaylists = {};
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];
                });

                setPlaylists(novasPlaylists);
            });
    }, 
    // lista de variaveis que devem ser monitoradas (qualquer valor de state)
    // ex [playlists]
    /// se vazio executa uma vez apenas
    []);


  return (
    <>
      <div style={estilosDaHomePage} >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Banner />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>

  );
}

export default HomePage;