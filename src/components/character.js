import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCharacter } from "../redux/actions/characterActions";
import PropTypes from "prop-types";

export const Character = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      className="character"
      onClick={() => {
        props.setSelectedCharacter();
        props.togglePopup();
      }}
    >
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
};

Character.propTypes = {
  characterDetails: PropTypes.shape({
    image: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }),
};

Character.defaultProps = {
  name: "Character name unavailable",
  image: "Unknown image",
  status: "Character status is unknown",
  species: "Character species is unknown",
  gender: "Character gender is unknown",
};
