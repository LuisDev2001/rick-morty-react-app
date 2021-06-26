import React from "react";

import CardCharacter from "./CardCharacter";
class ListCharacter extends React.Component {
  render() {
    return (
      <section className="grid">
        {this.props.list.map((character) => {
          return (
            <CardCharacter
              key={character.id}
              imageCharacter={character.image}
              nameCharacter={character.name}
              descriptionCharacter={character.name}
            />
          );
        })}
      </section>
    );
  }
}

export default ListCharacter;
