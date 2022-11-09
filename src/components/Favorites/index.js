
import styled from "styled-components";

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

export default function Favorites(props) {
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