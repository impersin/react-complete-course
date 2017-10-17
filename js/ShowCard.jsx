import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

const Wrapper = styled.div`
  width:32%;
  border:2px solid #333;
  border-radius:4px;
  margin-bottom:25px;
  padding-right:10px;
  overflow:hidden;
  `;
  // float:left;
  // height:66%;
  
const Image = styled.img`
  width:46%;
  margin-right:10px;
  float:left;
`;

const ShowCard = (props) => (
  <Wrapper className="show-card">
    <Image src={`/public/img/posters/${props.show.poster}`} alt={`${props.show.title} Show Poster`}/>
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  }).isRequired
};

export default ShowCard;  