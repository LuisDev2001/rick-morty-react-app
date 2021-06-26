import React from "react";

import "./styles/CardCharacter.css";

class CardCharacter extends React.Component {
  render() {
    return (
      <article className="card">
        <img
          className="card__image"
          src={this.props.imageCharacter}
          alt={this.props.descriptionCharacter}
        />
        <p className="card__name">{this.props.nameCharacter}</p>
      </article>
    );
  }
}

export default CardCharacter;
