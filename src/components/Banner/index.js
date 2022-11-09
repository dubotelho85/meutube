import styled from "styled-components";
import config from "../../../config.json";

export const StyledBanner = styled.div`
  margin-top: 56px;
  color: white;
  /* background: url(${config.banner}) top left/cover no-repeat; */
  background: url(${({bg})=>bg}) top left/cover no-repeat;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Banner() {
  return (
    <StyledBanner bg={config.banner}></StyledBanner>
  );
}
