import styled, { css } from "styled-components";

const GridGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px 10px;
  text-align: center;
`;

const ImageDiv = styled.img`
  ${props => {
    return css`
      width: 200px;
      height: 200px;
      cursor: pointer;
    `;
  }};
`;

export { GridGallery, ImageDiv };
