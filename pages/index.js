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

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage} >
        <Menu />
        <Banner />
        <Header />
        <Timeline playlists={config.playlists} />
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
    <StyledBanner></StyledBanner>
  );
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>{
              videos.map((video) => {
                return (
                  <a href={video.url}>
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
        favorites["cards"].map((card) => {
          return (
            <section className="favorite-card">
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