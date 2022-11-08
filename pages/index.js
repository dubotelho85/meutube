import React from "react";
import config from "../config.json"
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import { StyledBanner } from "../src/components/Banner"

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };
  // const valorDoFiltro = "Frost";
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
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

export default HomePage

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner"></img> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}></img>
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Banner() {
  return (
    <StyledBanner bg={config.banner}></StyledBanner>
  );
}

function Timeline({ seachValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, pIndex) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>{
              videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const seachValueNormalized = seachValue.toLowerCase();
                return titleNormalized.includes(seachValueNormalized);
              }).map((video, vIndex) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })
            }
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

const StyledFavorites = styled.div`
  padding: 16px;
  .favorite-header {
    font-size: 16px;
    padding: 16px;
    text-transform: capitalize;
    font-weight: bold;
    font-family: sans-serif;
  }
  .favorite-cards {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .favorite-card{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100px;

  }
  p{
    font-weight: 400;
    font-size: 14px;
  }
`;

function Favorites(props) {
  const favorites = props.favorites;
  return (
    <StyledFavorites>
      <p className="favorite-header">MeuTube Favoritos</p>
      <div className="favorite-cards">
        {
          favorites["cards"].map((card, fIndex) => {
            return (
              <section key={fIndex} className="favorite-card">
                <img src={`https://github.com/${card.src}.png`}></img>
                <p>
                  @{card.tag}
                </p>
              </section>
            )
          })
        }
      </div>

    </StyledFavorites>
  );
}